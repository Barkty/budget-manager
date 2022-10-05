import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  providers: [BudgetsService],
  controllers: [BudgetsController],
  exports: [BudgetsService]
})
export class BudgetsModule {}
