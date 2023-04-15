import { AccountEntity } from '../../entities/account.entity';

export interface UpdateAccountStatePort {
  updateAccountState(account: AccountEntity): Promise<void>;
}
