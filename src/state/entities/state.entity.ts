import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('state')
export class StateEntity{
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({nullable: true})
  name: string;

  @Column({name: 'created_at', nullable: false})
  created_at: Date;

  @Column({name: 'updated_at', nullable: false})
  updated_at: Date;

}