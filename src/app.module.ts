import { config } from "dotenv";
config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller'
import { AppService } from './app.service';
import { BudgetsModule } from './budgets/budgets.module';
import { AccountsModule } from './accounts/accounts.module';
import { User } from './users/entities/users.entity';
import { Accounts } from "./accounts/entities/accounts.entity";
import { Budget } from "./budgets/entities/budget.entity";
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DEV_DB_HOST,
    username: process.env.DEV_DB_USER,
    database: process.env.DEV_DB_DATABASE,
    port: 2586,
    password: process.env.DEV_DB_PASSWORD,
    entities: [User, Accounts, Budget],
    synchronize: true,
    logging: true,
    connectorPackage: 'mysql2'
  }), UsersModule, BudgetsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}