import { Module } from '@nestjs/common';
import { UserMajorsService } from './user-majors.service';
import { UserMajorsController } from './user-majors.controller';

@Module({
  controllers: [UserMajorsController],
  providers: [UserMajorsService],
})
export class UserMajorsModule {}
