import { AccountId, AccountEntity } from '../../entries/account.entity';

export interface LoadAccountPort {
  loadAccount(accountId: AccountId): AccountEntity;
}
