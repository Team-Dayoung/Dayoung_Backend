import { Module } from '@nestjs/common';
import { QuizCategoriesService } from './quiz-categories.service';
import { QuizCategoriesController } from './quiz-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizCategoriesModel } from './entity/quiz-categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizCategoriesModel])],
  controllers: [QuizCategoriesController],
  providers: [QuizCategoriesService],
})
export class QuizCategoriesModule {}
