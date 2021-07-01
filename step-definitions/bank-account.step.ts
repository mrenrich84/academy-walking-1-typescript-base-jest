import { binding, given, then, when} from 'cucumber-tsflow';
import { assert, expect } from 'chai';
import {Display, ErikoAccountService, Now} from '../src/main/example';


class NowMock implements Now{
    set(date: string) {

    }
}

class DisplayMock implements Display {
    private text: string | undefined;

    show(text: string) {
        this.text = text;
    }

    shouldHaveBeenCalledWith(expectedText: string) {
        expect(this.text).to.equal(expectedText);
    }
}

const nowMock = new NowMock();
const displayMock = new DisplayMock();

@binding()
export class BankAccountSteps {
    private readonly accountService = new ErikoAccountService(nowMock, displayMock);

    @given(/(a client makes )?a deposit of (\d+) on ([\d-]+)/)
    public givenDeposit(_: string, amount: string, date: string) {
        nowMock.set(date)
        this.accountService.deposit(Number(amount))
    }

    @given(/(a client makes )?a withdrawal of (\d*) on ([\d-]+)/)
    public givenWithdrawal(_:string, amount: string, date: string) {
        nowMock.set(date)
        this.accountService.withdraw(Number(amount))
    }

    @when(/they print their bank statement/)
    public whenPrint() {
        this.accountService.printStatement()
    }

    @then(/they would see:/)
    public seeAccount(table: string) {
        displayMock.shouldHaveBeenCalledWith(table);
    }
}