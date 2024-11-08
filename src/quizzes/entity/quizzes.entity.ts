import { BaseModel } from 'src/common/entity/base.entity';
import { QuizCategoriesModel } from 'src/quiz-categories/entity/quiz-categories.entity';
import { QuizSkillsModel } from 'src/quiz-skills/entity/quiz-skills.entity';
import { SolvedQuizzesModel } from 'src/solved-quizzes/entity/solved-quizzes.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class QuizzesModel extends BaseModel {
  @Column()
  title: string;

  @Column()
  question: string;

  @Column({
    nullable: true,
  })
  answer: string;

  @Column()
  level: number;

  @Column()
  count: number;

  @OneToMany(() => SolvedQuizzesModel, (solvedQuiz) => solvedQuiz.quiz)
  solvedQuizzes: SolvedQuizzesModel[];

  @OneToMany(() => QuizCategoriesModel, (majors) => majors.quiz)
  majors: QuizCategoriesModel[];

  @OneToMany(() => QuizSkillsModel, (skills) => skills.quiz)
  skills: QuizSkillsModel[];
}
