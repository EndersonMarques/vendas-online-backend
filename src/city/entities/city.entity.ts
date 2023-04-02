import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CityEntity{
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({nullable: false})
  stateId: number;

  @Column({nullable: true})
  name: string;

  @Column({name: 'created_at', nullable: false})
  created_at: Date;

  @Column({name: 'updated_at', nullable: false})
  updated_at: Date;

}