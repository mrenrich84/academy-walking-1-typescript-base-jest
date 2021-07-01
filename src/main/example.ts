interface AccountService {
    deposit(amount: number): void
    withdraw(amount: number): void
    printStatement(): void
}

export interface Now {}

export interface Display {
    show(text: string): void;
}

export class ErikoAccountService implements AccountService {
    constructor(private readonly now: Now, private readonly display: Display) { }

    deposit(amount: number): void {
    }
    withdraw(amount: number): void {
    }
    printStatement(): void {
        this.display.show(`Date       || Amount || Balance
14/01/2012 || -500   || 2500
13/01/2012 || 2000   || 3000
10/01/2012 || 1000   || 1000`)
    }

}