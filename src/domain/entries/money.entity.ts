export class Money {
  constructor(
    private readonly _amount: number,
    private readonly _currency: string,
  ) {}

  static zero(currency: string): Money {
    return new Money(0, currency);
  }

  static of(amount: number, currency: string): Money {
    return new Money(amount, currency);
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  static add = (a: Money, b: Money): Money => {
    if (a.currency !== b.currency) {
      throw new Error('Currencies must match');
    }
    return new Money(a.amount + b.amount, a.currency);
  };

  static minus = (a: Money, b: Money): Money => {
    if (a.currency !== b.currency) {
      throw new Error('Currencies must match');
    }
    return new Money(a.amount - b.amount, a.currency);
  };
}
