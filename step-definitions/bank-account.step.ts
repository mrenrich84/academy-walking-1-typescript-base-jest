import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import { Now } from '../src/main/example';

const mockNow = (): Now => () => new Date()

@binding()
export class BankAccountSteps {
    private readonly accountService = new ErikoAccountService();

    @given(/(a client makes )?a deposit of (\d+) on ([\d-]+)/)
    public givenDeposit(_: string, amount: string, date: string) {
        // TODO mock date?
        this.accountService.deposit(Number(amount))
    }

    @given(/(a client makes )?a withdrawal of (\d*) on ([\d-]+)/)
    public givenWithdrawal(_:string, amount: string, date: string) {
        // TODO mock date?
        this.accountService.withdraw(Number(amount))
    }

    @when(/they print their bank statement/)
    public whenPrint() {
        this.accountService.printStatement()
    }

    @then(/they would see:/)
    public seeAccount(table: string) {
        // mock console.log?
    }
}