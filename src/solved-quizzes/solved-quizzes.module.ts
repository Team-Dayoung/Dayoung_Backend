import { Module } from '@nestjs/common';
import { SolvedQuizzesService } from './solved-quizzes.service';
import { SolvedQuizzesController } from './solved-quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolvedQuizzesModel } from './entity/solved-quizzes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolvedQuizzesModel])],
  controllers: [SolvedQuizzesController],
  providers: [SolvedQuizzesService],
})
export class SolvedQuizzesModule {}
