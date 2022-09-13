import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './modules/user.resolver';
import { UserService } from './modules/user.service';

describe('Employee Resolver', () => {
  let resolver: UserResolver;
  let userService = {
    findAllUsers:()=>{}
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResolver, 
      {
        provide: UserService,
        useValue: userService
      }
    ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });


    it('Testing Employee Resolver', () => {
      expect(resolver).toBeDefined();
    });

    // it('Testing getUsers Query', () => {
    //   expect(resolver.getUsers).toBe({});
    // });
});
