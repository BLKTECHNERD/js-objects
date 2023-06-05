// Governor class
class Governor {
    static numberOfGovernors = 1;
    static termLength = 4;
  
    static getNumberOfGovernors() {
      console.log(`Number of governors: ${Governor.numberOfGovernors}`);
    }
  
    static getTermLength() {
      console.log(`Term length: ${Governor.termLength} years`);
    }
  }
  
  Governor.getNumberOfGovernors();
  Governor.getTermLength();
  
  // Person class
  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
    introduce() {
      console.log(`I am ${this.age} years old and identify as ${this.gender}`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping...`);
    }
  }
  
  // PostalWorker class
  class PostalWorker extends Person {
    deliverMail() {
      console.log(`${this.name} is delivering mail.`);
    }
  
    sortMail() {
      console.log(`${this.name} is sorting mail.`);
    }
  }
  
  // Chef class
  class Chef extends Person {
    prepareDish(dish) {
      console.log(`${this.name} is preparing ${dish}.`);
    }
  
    cook() {
      console.log(`${this.name} is cooking.`);
    }
  }
  
  // Create PostalWorkers
  const postalWorker1 = new PostalWorker("John", 25, "Male");
  const postalWorker2 = new PostalWorker("Emily", 30, "Female");
  
  // Create Chefs
  const chef1 = new Chef("Michael", 35, "Male");
  const chef2 = new Chef("Sara", 28, "Female");
  
  // Log and test methods
  postalWorker1.greet();
  postalWorker1.introduce();
  postalWorker1.deliverMail();
  postalWorker1.sortMail();
  
  postalWorker2.greet();
  postalWorker2.introduce();
  postalWorker2.deliverMail();
  postalWorker2.sortMail();
  
  chef1.greet();
  chef1.introduce();
  chef1.prepareDish("Lasagna");
  chef1.cook();
  
  chef2.greet();
  chef2.introduce();
  chef2.prepareDish("Pizza");
  chef2.cook();
  
  // BankAccount class
class BankAccount {
    constructor(ownerName, balance) {
      this.ownerName = ownerName;
      this.balance = balance;
      this.acctNum = this.generateAccountNumber();
    }
  
    generateAccountNumber() {
      const min = 100000;
      const max = 999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds. Withdrawal failed.`);
      }
    }
  }
  
  // CheckingAccount class
  class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overdraftEnabled) {
      super(ownerName, balance);
      this.overdraftEnabled = overdraftEnabled;
    }
  
    withdraw(amount) {
      if (this.overdraftEnabled || this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds. Withdrawal failed.`);
      }
    }
  }
  
  // SavingsAccount class
  class SavingsAccount extends BankAccount {
    withdraw(amount) {
      console.log(`Withdrawals are not allowed from a savings account.`);
    }
  }
  
  // Create BankAccount
  const bankAccount = new BankAccount("John Doe", 5000);
  console.log(bankAccount);
  
  bankAccount.deposit(1000);
  bankAccount.withdraw(2000);
  
  // Create CheckingAccount
  const checkingAccount = new CheckingAccount("Jane Smith", 3000, true);
  console.log(checkingAccount);
  
  checkingAccount.deposit(500);
  checkingAccount.withdraw(4000);
  
  // Create SavingsAccount
  const savingsAccount = new SavingsAccount("Alice Johnson", 10000);
  console.log(savingsAccount);
  
  savingsAccount.deposit(2000);
  savingsAccount.withdraw(500);
  