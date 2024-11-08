import { BaseModel } from 'src/common/entity/base.entity';
import { Role } from 'src/common/enum/role.enum';
import { QuizzesModel } from 'src/quizzes/entity/quizzes.entity';
import { SolvedQuizzesModel } from 'src/solved-quizzes/entity/solved-quizzes.entity';
import { UserMajorsModel } from 'src/user-majors/entity/user-majors.entity';
import { UserSkillsModel } from 'src/user-skills/entity/user-skills.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  Unique,
} from 'typeorm';

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

  @OneToMany(() => UserMajorsModel, (major) => major.user)
  majors: UserMajorsModel[];

  @OneToMany(() => UserSkillsModel, (skill) => skill.user)
  skills: UserSkillsModel[];

  @OneToMany(() => SolvedQuizzesModel, (solvedQuiz) => solvedQuiz.user)
  solvedQuizzes: SolvedQuizzesModel[];
}
