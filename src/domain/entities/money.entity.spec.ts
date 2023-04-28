import { MoneyEntity } from './money.entity';

describe('MoneyEntity', () => {
  it('should be defined by standard initialization', () => {
    expect(MoneyEntity.of(10)).toBeDefined();
  });

  it('should statically create money entity', () => {
    const money = MoneyEntity.of(10);

    expect(money.amount).toEqual(10);
    expect(money).toBeInstanceOf(MoneyEntity);
  });

  it('should return true if money entities are equal', () => {
    const money1 = MoneyEntity.of(10);
    const money2 = MoneyEntity.of(10);

    const result = MoneyEntity.equals(money1, money2);

    expect(result).toBeTruthy();
  });

  it('should create zero money entity', () => {
    const money = MoneyEntity.of(0);

    expect(money.amount).toEqual(0);
  });

  it('should add two money entities', () => {
    const money1 = MoneyEntity.of(10);
    const money2 = MoneyEntity.of(20);

    const result = MoneyEntity.add(money1, money2);

    expect(result.amount).toEqual(30);
  });

  it('should subtract two money entities', () => {
    const money1 = MoneyEntity.of(10);
    const money2 = MoneyEntity.of(20);

    const result = MoneyEntity.minus(money1, money2);

    expect(result).toEqual(-10);
  });

  it('should negate a money entity', () => {
    const money = MoneyEntity.of(10);

    const result = money.negate();

    expect(result).toEqual(-10);
  });

  it('should return true if money entity is positive or zero', () => {
    const money = MoneyEntity.of(10);

    const result = money.isPositiveOrZero();

    expect(result).toBeTruthy();
  });
});
