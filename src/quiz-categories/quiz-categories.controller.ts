import { Controller } from '@nestjs/common';
import { QuizCategoriesService } from './quiz-categories.service';

@Controller('quiz-categories')
export class QuizCategoriesController {
  constructor(private readonly quizCategoriesService: QuizCategoriesService) {}
}
