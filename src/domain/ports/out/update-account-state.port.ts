import { AccountEntity } from '../../entries/account.entity';

export interface UpdateAccountStatePort {
  updateAccountState(account: AccountEntity): Promise<void>;
}
