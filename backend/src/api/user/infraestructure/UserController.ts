import { controller, httpGet } from "inversify-express-utils";

@controller("/users")
export class UserController {
  constructor() {}

  @httpGet("/")
  async get() {}
}
