import { Test, TestingModule } from '@nestjs/testing';
import { SolvedQuizzesController } from './solved-quizzes.controller';
import { SolvedQuizzesService } from './solved-quizzes.service';

describe('SolvedQuizzesController', () => {
  let controller: SolvedQuizzesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolvedQuizzesController],
      providers: [SolvedQuizzesService],
    }).compile();

    controller = module.get<SolvedQuizzesController>(SolvedQuizzesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
