import { AccountId } from '../../entries/account.entity';

export interface GetAccountBalanceQuery {
  getAccountBalance(accountId: AccountId);
}
