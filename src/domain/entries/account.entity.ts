import { MoneyEntity } from './money.entity';

export type AccountId = number;

class AccountEntity {
  constructor(
    private readonly _id: AccountId,
    private readonly _name: string,
    private readonly _balance: MoneyEntity,
  ) {}

  get id(): AccountId {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get balance(): MoneyEntity {
    return this._balance;
  }
}
