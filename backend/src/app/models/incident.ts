import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

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
}
