import { Test, TestingModule } from '@nestjs/testing';
import { QuizSkillsController } from './quiz-skills.controller';
import { QuizSkillsService } from './quiz-skills.service';

describe('QuizSkillsController', () => {
  let controller: QuizSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizSkillsController],
      providers: [QuizSkillsService],
    }).compile();

    controller = module.get<QuizSkillsController>(QuizSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
