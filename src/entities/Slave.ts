import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @Column("text")
  race!: string;

  @Column("text")
  gender!: string;

  @Column("integer")
  age!: number;

  @Column("decimal")
  price!: number;

  @Column("text")
  imgUrl!: string;
}