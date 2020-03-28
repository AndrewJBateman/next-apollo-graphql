import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity("users")
export class User extends BaseEntity {
  // id defined as universally unique identifier (UUID) 128-bit number
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {length: 255})
  email: string;

  @Column("varchar", {length: 255})
  lastName: string;

  @Column("text")
  password: string;

  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
