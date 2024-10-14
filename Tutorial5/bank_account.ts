class BankAccount {
    private _balance: number;
  
    constructor(initialBalance: number) {
      this._balance = initialBalance;
    }
  
    get balance(): number {
      return this._balance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this._balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this._balance}.`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  }
  
  // bank account instance
  const account = new BankAccount(1000);
  console.log(`Initial balance: $${account.balance}`);
  account.deposit(500);

// deno run bank_account.ts