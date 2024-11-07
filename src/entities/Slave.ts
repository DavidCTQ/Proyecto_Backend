import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  race!: string;

  @Column("text")
  gender!: string;

  @Column()
  age!: number;

  @Column("decimal")
  price!: number;
}