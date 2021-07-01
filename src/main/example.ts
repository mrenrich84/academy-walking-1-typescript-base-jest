interface AccountService {
    deposit(amount: number): void
    withdraw(amount: number): void
    printStatement(): void
}

export type Now = () => Date
export type Display = (text: string) => void

export class ErikoAccountService implements AccountService {
    constructor(private readonly now: Now, private readonly display: Display) {

    }
    deposit(amount: number): void {
        throw new Error("Method not implemented.");
    }
    withdraw(amount: number): void {
        throw new Error("Method not implemented.");
    }
    printStatement(): void {
        throw new Error("Method not implemented.");
    }

}