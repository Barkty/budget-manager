import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";

/**
 * ! TO DO: Create an instance of auth service 
 */
it('can create an instance of auth service', async () => {

    //Create a fake copy of the users service

    const fakeUsersService = {
        find: () => Promise.resolve([]),
        create: (email: string, pass_word: string) => Promise.resolve({id: 1, email, pass_word})
    }
    const module = await Test.createTestingModule({
        providers: [
            AuthService, 
            {
                provide: UsersService,
                useValue: fakeUsersService
            }
        ]
    }).compile()

    const service = module.get(AuthService)

    expect(service).toBeDefined()
})