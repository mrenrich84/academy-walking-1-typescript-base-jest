import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import DataTable from "@cucumber/cucumber/lib/models/data_table";

@binding()
export class BankAccountSteps {

    @given(/(a client makes )?a deposit of (\d+) on ([\d-]+)/)
    public givenDeposit(_: string, amount: string, date: string) {
        console.log(amount, date)
    }

    @given(/(a client makes )?a withdrawal of (\d*) on ([\d-]+)/)
    public givenWithdrawal(_:string, amount: string, date: string) {
        console.log(amount, date)
    }

    @when(/they print their bank statement/)
    public whenPrint() {
        console.log("printed")
    }

    @then(/they would see:/)
    public seeAccount(table: DataTable) {
        console.log(table)
    }
}