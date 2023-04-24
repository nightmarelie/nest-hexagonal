import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Activity', {})
export class ActivityOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: number;

  @Column()
  ownerAccountId: number;

  @Column()
  sourceAccountId: number;

  @Column()
  targetAccountId: number;

  @Column()
  amount: number;
}
