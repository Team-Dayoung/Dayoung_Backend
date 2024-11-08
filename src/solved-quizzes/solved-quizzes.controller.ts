import { Controller } from '@nestjs/common';
import { SolvedQuizzesService } from './solved-quizzes.service';

@Controller('solved-quizzes')
export class SolvedQuizzesController {
  constructor(private readonly solvedQuizzesService: SolvedQuizzesService) {}
}
