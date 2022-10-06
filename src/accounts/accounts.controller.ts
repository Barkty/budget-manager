import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('api/accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getHello(): string {
    return this.accountsService.getHello();
  }
}
