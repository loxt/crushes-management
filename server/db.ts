import * as mongoose from 'mongoose';

class Database {
  private dbUrl = 'mongodb://localhost:27017/crushes';

  constructor() {}

  createConnection() {
    mongoose.connect(this.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }).then(() => console.log('MongoDB  is running'))
      .catch((err) => console.error.bind(console, `Error in connection: ${err}`));
  }
}

export default Database;