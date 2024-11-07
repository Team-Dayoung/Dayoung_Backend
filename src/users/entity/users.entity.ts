import { Injectable } from '@nestjs/common';
import { BaseModel } from 'src/common/entity/base.entity';
import { Column, Entity, Unique } from 'typeorm';

export enum Role {
  ADMIN = '관리자',
  USER = '사용자',
}

@Entity()
export class UsersModel extends BaseModel {
  @Column({
    type: 'varchar',
    length: 20,
    unique: true,
  })
  accountId: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  introduction: string;

  @Column({
    default: Role.USER,
  })
  role: Role;

  @Column()
  level: number;

  @Column()
  rank: number;

  @Column()
  totalScore: number;
}
