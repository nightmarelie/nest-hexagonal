import { AccountEntity } from './account.entity';
import { ActivityWindowEntity } from './activity-window.entity';
import { ActivityEntity } from './activity.entity';
import { MoneyEntity } from './money.entity';

describe('AccountEntity', () => {
  it('should be defined by standard initialization', () => {
    const money = MoneyEntity.of(10);

    const owner = new AccountEntity(1, money);
    const source = new AccountEntity(2, money);
    const target = new AccountEntity(3, money);

    const activity = new ActivityEntity(
      owner.id,
      source.id,
      target.id,
      new Date(),
      money,
    );
    const activityWindow = new ActivityWindowEntity();

    activityWindow.addActivity(activity);

    const account = new AccountEntity(1, money, activityWindow);

    expect(account).toBeDefined();
  });

  // it('should calculate balance', () => {
  //   const account = new AccountEntity(1, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));

  //   const result = account.calculateBalance();

  //   expect(result.amount).toEqual(toBigNumber(10));
  // }

  // it('should return true if account entities are equal', () => {
  //   const account1 = new AccountEntity(1, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));
  //   const account2 = new AccountEntity(1, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));

  //   const result = AccountEntity.equals(account1, account2);

  //   expect(result).toBeTruthy();
  // }

  // it('should return false if account entities are not equal', () => {
  //   const account1 = new AccountEntity(1, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));
  //   const account2 = new AccountEntity(2, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));

  //   const result = AccountEntity.equals(account1, account2);

  //   expect(result).toBeFalsy();
  // }

  // it('should return false if account entities are not equal', () => {
  //   const account1 = new AccountEntity(1, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));
  //   const account2 = new AccountEntity(2, new MoneyEntity(toBigNumber(10), 'USD'), new ActivityWindowEntity([]));

  //   const result = AccountEntity.equals(account1, account2);

  //   expect(result).toBeFalsy();
  // }
});
