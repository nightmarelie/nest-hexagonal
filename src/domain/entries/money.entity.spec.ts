import { MoneyEntity } from './money.entity';

describe('MoneyEntity', () => {
  it('should be defined', () => {
    expect(new MoneyEntity(10, 'USD')).toBeDefined();
  });
});
