import * as express from 'express';
import Routes from '../routes';

import DbConnection from '../app/config/database';

class App {
  constructor() {
    this.routes();
    this.middleware();
    this.database();
  }

  private app = express();

  private port = 3333;

  private routes() {
    this.app.use(Routes);
  }

  private middleware() {
    this.app.use(express.json());
  }

  private async database(): Promise<void> {
    try {
      await DbConnection;
    } catch (error) {
      const Error = `Error:\n -> Connection database.\n -> ${error} `;
      console.error(Error);
    }
  }

  public server(): void {
    this.app.listen(this.port);
    console.log(`Server on: PORT(${this.port})`);
  }
}

export default new App();
