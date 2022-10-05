import { Injectable } from '@nestjs/common';

@Injectable()
export class BudgetsService {
  getHello(): string {
    return 'Hello Users!';
  }
}
