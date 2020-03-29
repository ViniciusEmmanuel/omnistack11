import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  AfterLoad,
  ManyToOne,
  BaseEntity,
  JoinColumn,
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
  hiddenColumns() {
    if (this.ong) {
      delete this.ong.password;
      delete this.ong.id;
    }

    if (this.ong_id) {
      return (this.ong_id = '********');
    }
  }
}
