import { ActivityEntity } from './activity.entity';
import { MoneyEntity, toBigNumber } from './money.entity';

describe('ActivityEntity', () => {
  const ownerAccountId = 1;
  const sourceAccountId = 2;
  const targetAccountId = 3;

  it('should be defined by standard initialization', () => {
    const activity = new ActivityEntity(
      ownerAccountId,
      sourceAccountId,
      targetAccountId,
      new Date(),
      new MoneyEntity(toBigNumber(10), 'USD'),
    );

    expect(activity).toBeDefined();
  });
});
