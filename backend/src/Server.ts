import cors from "cors";
import { Application, json, raw, urlencoded } from "express";
import * as http from "http";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { ENV } from "./env";

import "../src/api/user/infraestructure/UserController";
import { DatabaseConnector } from "./DatabaseConnector";

export class Server {
  public app: Application = null!;
  public httpServer?: http.Server;
  private dependencyContainer: Container;
  private databaseConnector: DatabaseConnector;

  constructor() {
    this.dependencyContainer = new Container();
    this.databaseConnector = new DatabaseConnector();
    console.log("🚀 SERVER CREATED 🚀");
    this.create();
  }

  public async start() {
    return new Promise((resolve) => {
      const PORT = ENV.NODE_PORT || 3000;
      console.log("porttt: ", PORT);

      console.log("🚀 Start created");
      this.httpServer = this.app.listen(PORT, () => {
        console.log(`🚀 Server listening in ${PORT}`);
      });
      resolve("");
    });
  }

  public close() {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        console.log("❌ Server closed");
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve("");
        });
      }
      return resolve("");
    });
  }

  private create() {
    const server = new InversifyExpressServer(this.dependencyContainer);
    this.configServerLibraries(server);
    this.app = server.build();
    this.databaseConnector.connect();
  }

  private configServerLibraries(server: InversifyExpressServer) {
    server.setConfig((app) => {
      app.use(urlencoded({ extended: true }));
      app.use(json());
      app.use(cors());
      app.use(raw({ limit: "50mb", type: ["image/*"] }));
    });
  }

  // private loadServerDependencies() {
  //   const dependencyConfigurator = new DependencyConfigurator(
  //     this.dependencyContainer
  //   );
  //   dependencyConfigurator.applyDependencies();
  // }
}
