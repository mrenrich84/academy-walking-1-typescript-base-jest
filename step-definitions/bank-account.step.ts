import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
export class BankAccountSteps {

    @given(/(a client makes )?a deposit of \$(\d*) on \$(\d+-\d+-\d+)/)
    public givenDeposit(_:string, amount: string, date: string) {
        console.log(amount, date)
    }

    @given(/(a client makes )?a withdrawal of \$(\d*) on \$(\d+-\d+-\d+)/)
    public givenWithdrawal(_:string, amount: string, date: string) {
        console.log(amount, date)
    }

    @when(/they print their bank statement/)
    public whenPrint() {
        console.log("printed")
    }

    @then(/they would see:/)
    public seeAccount() {
        console.log("see")
    }
}