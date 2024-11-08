import { Test, TestingModule } from '@nestjs/testing';
import { SolvedQuizzesService } from './solved-quizzes.service';

describe('SolvedQuizzesService', () => {
  let service: SolvedQuizzesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolvedQuizzesService],
    }).compile();

    service = module.get<SolvedQuizzesService>(SolvedQuizzesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
