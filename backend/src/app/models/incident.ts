import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  AfterLoad,
} from 'typeorm';

import { Ong } from './ong';

@Entity({ name: 'incidents' })
export class Incident extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  ong_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne((type) => Ong)
  @JoinColumn({ name: 'ong_id' })
  ong: Ong;

  @AfterLoad()
  hiddenColumn() {
    if (this.ong) {
      delete this.ong.id;
      delete this.ong.password;
      delete this.ong.createdAt;
      delete this.ong.updatedAt;
    }
  }
}
