import { Module } from '@nestjs/common';
import { QuizSkillsService } from './quiz-skills.service';
import { QuizSkillsController } from './quiz-skills.controller';

@Module({
  controllers: [QuizSkillsController],
  providers: [QuizSkillsService],
})
export class QuizSkillsModule {}
