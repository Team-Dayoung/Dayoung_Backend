import { Test, TestingModule } from '@nestjs/testing';
import { UserMajorsService } from './user-majors.service';

describe('UserMajorsService', () => {
  let service: UserMajorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMajorsService],
    }).compile();

    service = module.get<UserMajorsService>(UserMajorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
