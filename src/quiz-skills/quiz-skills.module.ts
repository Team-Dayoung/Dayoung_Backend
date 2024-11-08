import { Module } from '@nestjs/common';
import { QuizSkillsService } from './quiz-skills.service';
import { QuizSkillsController } from './quiz-skills.controller';
import { QuizSkillsModel } from './entity/quiz-skills.entity';

@Module({
  imports: [QuizSkillsModel],
  controllers: [QuizSkillsController],
  providers: [QuizSkillsService],
})
export class QuizSkillsModule {}
