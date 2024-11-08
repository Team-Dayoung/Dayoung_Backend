import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ENV_DB_DATABASE_KEY,
  ENV_DB_HOST_KEY,
  ENV_DB_PASSWORD_KEY,
  ENV_DB_PORT_KEY,
  ENV_DB_USERNAME,
} from './common/const/env-key.const';
import { UsersModule } from './users/users.module';
import { UserMajorsModule } from './user-majors/user-majors.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuizSkillsModule } from './quiz-skills/quiz-skills.module';
import { QuizCategoriesModule } from './quiz-categories/quiz-categories.module';
import { UsersModel } from './users/entity/users.entity';
import { UserMajorsModel } from './user-majors/entity/user-majors.entity';
import { QuizzesModel } from './quizzes/entity/quizzes.entity';
import { SolvedQuizzesModule } from './solved-quizzes/solved-quizzes.module';
import { SolvedQuizzesModel } from './solved-quizzes/entity/solved-quizzes.entity';
import { QuizCategoriesModel } from './quiz-categories/entity/quiz-categories.entity';
import { QuizSkillsModel } from './quiz-skills/entity/quiz-skills.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env[ENV_DB_HOST_KEY],
      port: parseInt(process.env[ENV_DB_PORT_KEY]),
      username: process.env[ENV_DB_USERNAME],
      password: process.env[ENV_DB_PASSWORD_KEY],
      database: process.env[ENV_DB_DATABASE_KEY],
      entities: [
        UsersModel,
        UserMajorsModel,
        QuizzesModel,
        SolvedQuizzesModel,
        QuizCategoriesModel,
        QuizSkillsModel,
      ],
      synchronize: true,
    }),
    UsersModule,
    UserMajorsModule,
    QuizzesModule,
    QuizSkillsModule,
    QuizCategoriesModule,
    SolvedQuizzesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
