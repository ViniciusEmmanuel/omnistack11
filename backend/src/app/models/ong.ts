import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  AfterLoad,
  BaseEntity,
} from 'typeorm';

import { hash, compare } from 'bcryptjs';

@Entity({ name: 'ongs' })
export class Ong extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  whatsapp: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 8);
    }
  }

  @AfterLoad()
  hiddenPassword() {
    console.log(this);
    if (this.password) {
      delete this.password;
    }
  }
}
