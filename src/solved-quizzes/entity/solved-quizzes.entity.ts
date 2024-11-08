import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersModel } from 'src/users/entity/users.entity';
import { QuizzesModel } from 'src/quizzes/entity/quizzes.entity';
import { BaseModel } from 'src/common/entity/base.entity';

@Entity()
export class SolvedQuizzesModel extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersModel, (user) => user.solvedQuizzes)
  @JoinColumn({ name: 'user_id' })
  user: UsersModel;

  @ManyToOne(() => QuizzesModel, (quiz) => quiz.solvedQuizzes)
  @JoinColumn({ name: 'quiz_id' })
  quiz: QuizzesModel;

  @Column()
  score: number;

  @Column()
  answer: string;

  @Column()
  feedback: string;

  @CreateDateColumn()
  completedAt: Date;
}
