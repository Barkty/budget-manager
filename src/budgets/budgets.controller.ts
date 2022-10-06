import { Controller, Get } from '@nestjs/common';
import { BudgetsService } from './budgets.service';

@Controller('api/budgets')
export class BudgetsController {
    constructor(private readonly budgetService: BudgetsService) {}

  @Get()
  getHello(): string {
    return this.budgetService.getHello();
  }
}
