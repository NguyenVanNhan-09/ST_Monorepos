import { Test, TestingModule } from '@nestjs/testing';
import { AuthGymsService } from './auth-gyms.service';

describe('AuthGymsService', () => {
  let service: AuthGymsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthGymsService],
    }).compile();

    service = module.get<AuthGymsService>(AuthGymsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
