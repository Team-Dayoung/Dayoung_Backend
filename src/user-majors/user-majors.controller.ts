import { Controller } from '@nestjs/common';
import { UserMajorsService } from './user-majors.service';

@Controller('user-majors')
export class UserMajorsController {
  constructor(private readonly userMajorsService: UserMajorsService) {}
}
