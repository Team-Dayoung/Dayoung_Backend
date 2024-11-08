import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizzesModel } from './entity/quizzes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizzesModel])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
