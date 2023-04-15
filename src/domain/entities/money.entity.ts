export class MoneyEntity {
  constructor(
    private readonly _amount: number,
    private readonly _currency: string,
  ) {}

  static equals(money1: MoneyEntity, money2: MoneyEntity) {
    return (
      money1.amount === money2.amount && money1.currency === money2.currency
    );
  }

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

  negate(currency: string) {
    return new MoneyEntity(-this.amount, currency);
  }

  isPositiveOrZero() {
    return this.amount >= 0;
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
