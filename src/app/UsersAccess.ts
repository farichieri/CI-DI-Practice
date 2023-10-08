import { User } from './UsersModel';
import * as dbConnection from './DataBaseConnector';

// This is usually the way in which we can test db operations.
export class UsersAccess {
  // We can mock the dbConnection return types and still write tests for our db implementations
  // A great way to test dbs is not just mock them but use a real version or a version as close as to reality as possible
  public async connectToDb() {
    await dbConnection.connect();
  }

  public async closeConnection() {
    await dbConnection.close();
  }

  public async addUser(user: User) {
    const id = await dbConnection.addUser(user);
    return id;
  }

  public async getUser(id: string) {
    const result = await dbConnection.getUser(id);
    return result;
  }

  public async getAllUsers() {
    const result = await dbConnection.getAllUsers();
    return result;
  }
}
