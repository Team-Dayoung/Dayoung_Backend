import { Controller } from '@nestjs/common';
import { QuizSkillsService } from './quiz-skills.service';

@Controller('quiz-skills')
export class QuizSkillsController {
  constructor(private readonly quizSkillsService: QuizSkillsService) {}
}
