import { getConnection } from 'typeorm';

export abstract class AbstractMethods {
  public async create<T>(modelName: string, values: T) {
    try {
      const data = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(modelName)
        .values(values)
        .execute();

      return data;
    } catch (error) {
      const codeError = error.code;
      const detailError = error.detail;

      throw new Error(`code: ${codeError}, detail: ${detailError}`);
    }
  }
}
