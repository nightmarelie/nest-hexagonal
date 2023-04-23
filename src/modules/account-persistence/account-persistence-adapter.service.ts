import { LoadAccountPort } from '../../domain/ports/out/load-account.port';
import { UpdateAccountStatePort } from '../../domain/ports/out/update-account-state.port';
import { AccountEntity, AccountId } from '../../domain/entities/account.entity';
import { Injectable } from '@nestjs/common';
import { AccountOrmEntity } from './account.orm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityOrmEntity } from './activity.orm-entity';
import { AccountMapper } from './account.mapper';

@Injectable()
export class AccountPersistenceAdapterService
  implements LoadAccountPort, UpdateAccountStatePort
{
  constructor(
    @InjectRepository(AccountOrmEntity)
    private _accountRepository: Repository<AccountOrmEntity>,
    @InjectRepository(ActivityOrmEntity)
    private _activityRepository: Repository<ActivityOrmEntity>,
  ) {}

  async loadAccount(accountId: AccountId): Promise<AccountEntity> {
    const account = await this._accountRepository.findOneBy({
      userId: accountId,
    });
    if (account === undefined) {
      throw new Error('Account not found');
    }
    const activities = await this._activityRepository.findBy({
      ownerAccountId: accountId,
    });

    return AccountMapper.mapToDomain(account, activities);
  }

  async updateActivities(account: AccountEntity) {
    account.activityWindow.activities.forEach((activity) => {
      if (activity.id === null) {
        this._activityRepository.save(AccountMapper.mapToOrmEntity(activity));
      }
    });
  }
}
