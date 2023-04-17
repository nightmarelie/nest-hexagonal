import { Controller, Get, Inject, Query } from '@nestjs/common';
import { SendMoneyCommand } from '../../domain/ports/in/send-money.command';
import {
  SendMoneyUseCase,
  SendMoneyUseCaseSymbol,
} from '../../domain/ports/in/send-money.use-case';
import { MoneyEntity } from '../../domain/entities/money.entity';
import { AccountId } from '../../domain/entities/account.entity';

@Controller('/account/send')
export class SendMoneyController {
  constructor(
    @Inject(SendMoneyUseCaseSymbol)
    private readonly _sendMoneyService: SendMoneyUseCase,
  ) {}

  @Get('/')
  async sendMoney(
    @Query('sourceAccountId') sourceAccountId: AccountId,
    @Query('targetAccountId') targetAccountId: AccountId,
    @Query('amount') amount: number,
  ) {
    const sendMoneyCommand = new SendMoneyCommand(
      sourceAccountId,
      targetAccountId,
      MoneyEntity.of(amount, 'USD'),
    );
    const result = await this._sendMoneyService.sendMoney(sendMoneyCommand);
    return { result };
  }
}
