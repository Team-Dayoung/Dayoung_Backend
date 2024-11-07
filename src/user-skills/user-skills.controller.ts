import { Controller } from '@nestjs/common';
import { UserSkillsService } from './user-skills.service';

@Controller('user-skills')
export class UserSkillsController {
  constructor(private readonly userSkillsService: UserSkillsService) {}
}
