import { Test, TestingModule } from '@nestjs/testing';
import { UserMajorsController } from './user-majors.controller';
import { UserMajorsService } from './user-majors.service';

describe('UserMajorsController', () => {
  let controller: UserMajorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMajorsController],
      providers: [UserMajorsService],
    }).compile();

    controller = module.get<UserMajorsController>(UserMajorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
