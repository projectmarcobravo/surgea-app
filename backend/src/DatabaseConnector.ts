import mongoose from "mongoose";

export class DatabaseConnector {
  private readonly dbUri;

  constructor() {
    this.dbUri = `${process.env.DATABASE_MONGO}://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`;
  }

  async getConnection(): Promise<void> {
    try {
      await mongoose.connect(this.dbUri);
    } catch (error) {
      console.error("❌❌❌ Database connection error:", error);
      throw new Error("❌ Database connection error");
    }
  }

  async connect(): Promise<void> {
    return await this.getConnection();
  }
}
