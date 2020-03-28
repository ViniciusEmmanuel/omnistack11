import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOngs1585107090303 implements MigrationInterface {
  private table = new Table({
    name: 'ongs',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },

      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '60',
        isNullable: false,
      },
      {
        name: 'whatsapp',
        type: 'varchar',
        length: '11',
        isNullable: false,
      },
      {
        name: 'city',
        type: 'varchar',
        length: '120',
        isNullable: false,
      },
      {
        name: 'uf',
        type: 'char',
        length: '2',
        isNullable: false,
      },

      {
        name: 'created_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.table);
  }
}
