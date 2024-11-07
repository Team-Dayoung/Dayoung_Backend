import { Module } from '@nestjs/common';
import { QuizCategoriesService } from './quiz-categories.service';
import { QuizCategoriesController } from './quiz-categories.controller';

@Module({
  controllers: [QuizCategoriesController],
  providers: [QuizCategoriesService],
})
export class QuizCategoriesModule {}
