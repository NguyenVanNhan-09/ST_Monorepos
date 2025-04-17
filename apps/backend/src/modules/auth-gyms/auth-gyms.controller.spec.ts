import { Test, TestingModule } from '@nestjs/testing';
import { AuthGymsController } from './auth-gyms.controller';

describe('AuthGymsController', () => {
  let controller: AuthGymsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthGymsController],
    }).compile();

    controller = module.get<AuthGymsController>(AuthGymsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
