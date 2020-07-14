import mongoose from 'mongoose';

class Database {
  private mongoConnection: any;

  constructor() {
    this.mongo();
  }

  mongo(): void {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
