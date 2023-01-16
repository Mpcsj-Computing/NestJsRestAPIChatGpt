import { Test, TestingModule } from '@nestjs/testing';
import { AwsParameterStoreService } from './aws-parameter-store.service';

describe('AwsParameterStoreService', () => {
  let service: AwsParameterStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwsParameterStoreService],
    }).compile();

    service = module.get<AwsParameterStoreService>(AwsParameterStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
