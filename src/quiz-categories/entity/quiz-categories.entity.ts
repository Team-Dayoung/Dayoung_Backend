import { QuizCategory } from 'src/common/enum/quizCategory.enum';
import { QuizzesModel } from 'src/quizzes/entity/quizzes.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class QuizCategoriesModel {
  @PrimaryColumn({
    type: 'enum',
    enum: QuizCategory,
  })
  major: QuizCategory;

  @PrimaryColumn()
  quizId: number;

  @ManyToOne(() => QuizzesModel, (quiz) => quiz.majors)
  @JoinColumn({ name: 'quizId' })
  quiz: QuizzesModel;
}
