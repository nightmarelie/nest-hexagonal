import { BigNumber } from 'bignumber.js';

export class MoneyEntity {
  constructor(
    private readonly _amount: BigNumber,
    private readonly _currency: string,
  ) {}

  static equals(money1: MoneyEntity, money2: MoneyEntity) {
    return (
      money1.amount.isEqualTo(money2.amount) &&
      money1.currency === money2.currency
    );
  }

  static zero(currency: string): MoneyEntity {
    return new MoneyEntity(toBigNumber(0), currency);
  }

  static of(amount: BigNumber, currency: string): MoneyEntity {
    return new MoneyEntity(amount, currency);
  }

  get amount(): BigNumber {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  negate(currency: string) {
    return new MoneyEntity(this.amount.negated(), currency);
  }

  isPositiveOrZero() {
    return this.amount.gte(toBigNumber(0));
  }

  static add = (a: MoneyEntity, b: MoneyEntity): MoneyEntity => {
    if (a.currency !== b.currency) {
      throw new Error('Currencies must match');
    }
    return new MoneyEntity(a.amount.plus(b.amount), a.currency);
  };

  static minus = (a: MoneyEntity, b: MoneyEntity): MoneyEntity => {
    if (a.currency !== b.currency) {
      throw new Error('Currencies must match');
    }

    return new MoneyEntity(a.amount.minus(b.amount), a.currency);
  };
}

export const toBigNumber = (amount: number): BigNumber => {
  return new BigNumber(amount);
};

export const toNumber = (amount: BigNumber): number => {
  return amount.toNumber();
};
