import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller'
import { AppService } from './app.service';
import { BudgetsModule } from './budgets/budgets.module';
import { AccountsModule } from './accounts/accounts.module';
import { User } from './users/entities/users.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'budgets',
    entities: [User],
    synchronize: true,
  }), UsersModule, BudgetsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}