import { Module } from '@nestjs/common';
import { UserMajorsService } from './user-majors.service';
import { UserMajorsController } from './user-majors.controller';
import { UserMajorsModel } from './entity/user-majors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserMajorsModel])],
  controllers: [UserMajorsController],
  providers: [UserMajorsService],
})
export class UserMajorsModule {}
