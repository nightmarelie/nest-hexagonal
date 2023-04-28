import { ActivityWindowEntity } from './activity-window.entity';
import { ActivityEntity } from './activity.entity';
import { MoneyEntity } from './money.entity';

describe('ActivityWindowEntity', () => {
  const ownerAccountId = 1;
  const sourceAccountId = 2;
  const targetAccountId = 3;

  it('should be defined by standard initialization', () => {
    const activityWindow = new ActivityWindowEntity();

    expect(activityWindow).toBeTruthy();
  });

  it('adds activity to the list', () => {
    const activity = new ActivityEntity(
      ownerAccountId,
      sourceAccountId,
      targetAccountId,
      new Date(),
      MoneyEntity.of(10),
    );

    const activityWindow = new ActivityWindowEntity();

    activityWindow.addActivity(activity);

    expect(activityWindow.activities.length).toEqual(1);
  });
});
