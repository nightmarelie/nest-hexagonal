import { MoneyEntity, toBigNumber, toNumber } from './money.entity';

describe('MoneyEntity', () => {
  it('should be defined by standard initialization', () => {
    expect(new MoneyEntity(toBigNumber(10), 'USD')).toBeDefined();
  });

  it('should statically create money entity', () => {
    const money = MoneyEntity.of(toBigNumber(10), 'USD');

    expect(money.amount).toEqual(toBigNumber(10));
    expect(money.currency).toEqual('USD');
    expect(money).toBeInstanceOf(MoneyEntity);
  });

  it('should return true if money entities are equal', () => {
    const money1 = new MoneyEntity(toBigNumber(10), 'USD');
    const money2 = new MoneyEntity(toBigNumber(10), 'USD');

    const result = MoneyEntity.equals(money1, money2);

    expect(result).toBeTruthy();
  });

  it('should create zero money entity', () => {
    const money = new MoneyEntity(toBigNumber(0), 'USD');

    expect(money.amount).toEqual(toBigNumber(0));
    expect(money.currency).toEqual('USD');
  });

  it('should add two money entities', () => {
    const money1 = new MoneyEntity(toBigNumber(10), 'USD');
    const money2 = new MoneyEntity(toBigNumber(20), 'USD');

    const result = MoneyEntity.add(money1, money2);

    expect(result.amount).toEqual(toBigNumber(30));
  });

  it('should subtract two money entities', () => {
    const money1 = new MoneyEntity(toBigNumber(10), 'USD');
    const money2 = new MoneyEntity(toBigNumber(20), 'USD');

    const result = MoneyEntity.minus(money1, money2);

    expect(result.amount).toEqual(toBigNumber(10).negated());
  });

  it('should negate a money entity', () => {
    const money = new MoneyEntity(toBigNumber(10), 'USD');

    const result = money.negate('USD');

    expect(result.amount).toEqual(toBigNumber(10).negated());
  });

  it('should return true if money entity is positive or zero', () => {
    const money = new MoneyEntity(toBigNumber(10), 'USD');

    const result = money.isPositiveOrZero();

    expect(result).toBeTruthy();
  });
});
