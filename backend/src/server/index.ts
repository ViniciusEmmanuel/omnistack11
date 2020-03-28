import * as express from 'express';
import * as helmet from 'helmet';

import Routes from '../routes';
import DbConnection from '../app/config/database';

class App {
  constructor() {
    this.middleware();
    this.routes();
    this.database();
  }

  private app = express();
  private port = 3333;

  private middleware() {
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private routes() {
    this.app.use(Routes);
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
