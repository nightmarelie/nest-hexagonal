export class MoneyEntity {
  constructor(
    private readonly _amount: number,
    private readonly _currency: string,
  ) {}

  static zero(currency: string): MoneyEntity {
    return new MoneyEntity(0, currency);
  }

  static of(amount: number, currency: string): MoneyEntity {
    return new MoneyEntity(amount, currency);
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  static add = (a: MoneyEntity, b: MoneyEntity): MoneyEntity => {
    if (a.currency !== b.currency) {
      throw new Error('Currencies must match');
    }
    return new MoneyEntity(a.amount + b.amount, a.currency);
  };

  static minus = (a: MoneyEntity, b: MoneyEntity): MoneyEntity => {
    if (a.currency !== b.currency) {
      throw new Error('Currencies must match');
    }
    return new MoneyEntity(a.amount - b.amount, a.currency);
  };
}
