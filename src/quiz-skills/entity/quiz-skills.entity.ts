import { Skill } from 'src/common/enum/skill.enum';
import { QuizzesModel } from 'src/quizzes/entity/quizzes.entity';
import { UsersModel } from 'src/users/entity/users.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class QuizSkillsModel {
  @PrimaryColumn({
    type: 'enum',
    enum: Skill,
  })
  skill: Skill;

  @PrimaryColumn()
  quizId: number;

  @ManyToOne(() => QuizzesModel, (quiz) => quiz.skills)
  @JoinColumn({ name: 'quizId' })
  quiz: QuizzesModel;
}
