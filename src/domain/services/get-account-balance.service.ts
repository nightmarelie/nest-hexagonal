import { AccountId } from '../entities/account.entity';
import { LoadAccountPort } from '../ports/out/load-account.port';

export class GetAccountBalanceService {
  constructor(private readonly _loadAccountPort: LoadAccountPort) {}

  getAccountBalance(accountId: AccountId) {
    return this._loadAccountPort.loadAccount(accountId);
  }
}
