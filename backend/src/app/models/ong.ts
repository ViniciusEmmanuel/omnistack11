import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import { Incident } from './incident';

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

  @OneToMany((type) => Incident, (incidents) => incidents.ong)
  incidents: Incident[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 8);
    }
  }

  async comparePassword(password: string) {
    if (this.password) {
      return compare(password, this.password);
    }

    return false;
  }
}
