import { BigNumber } from 'bignumber.js';

export class MoneyEntity {
  private constructor(private readonly _amount: BigNumber) {}

  static equals(money1: MoneyEntity, money2: MoneyEntity) {
    return toBigNumber(money1.amount).isEqualTo(toBigNumber(money2.amount));
  }

  static zero(): MoneyEntity {
    return new MoneyEntity(toBigNumber(0));
  }

  static of(amount: number): MoneyEntity {
    return new MoneyEntity(toBigNumber(amount));
  }

  get amount(): number {
    return this._amount.toNumber();
  }

  negate(): MoneyEntity {
    return new MoneyEntity(toBigNumber(this.amount).negated());
  }

  isPositiveOrZero() {
    return toBigNumber(this.amount).gte(toBigNumber(0));
  }

  static add = (a: MoneyEntity, b: MoneyEntity): MoneyEntity => {
    return new MoneyEntity(toBigNumber(a.amount).plus(b.amount));
  };

  static minus = (a: MoneyEntity, b: MoneyEntity): number => {
    return new MoneyEntity(toBigNumber(a.amount).minus(b.amount)).amount;
  };
}

const toBigNumber = (amount: number): BigNumber => {
  return new BigNumber(amount);
};
