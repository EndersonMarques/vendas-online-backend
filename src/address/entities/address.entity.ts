import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AddressEntity{
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({nullable: false})
  userId: number;

  @Column({nullable: true})
  complement: string;

  @Column({ name:'number', nullable: false})
  numberAddress: number;

  @Column({nullable: false})
  cep: number;

  @Column({nullable: false})
  cityId: number;

  @Column({name: 'created_at', nullable: false})
  created_at: Date;

  @Column({name: 'updated_at', nullable: false})
  updated_at: Date;

}