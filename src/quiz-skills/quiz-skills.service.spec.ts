import { Test, TestingModule } from '@nestjs/testing';
import { QuizSkillsService } from './quiz-skills.service';

describe('QuizSkillsService', () => {
  let service: QuizSkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizSkillsService],
    }).compile();

    service = module.get<QuizSkillsService>(QuizSkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
