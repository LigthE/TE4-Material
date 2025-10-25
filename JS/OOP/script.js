console.log("Hello, World!");

//A1,A2
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name} is in age ${this.age} old`);
  }
}

const Student1 = new Student("Erkan", 18);
const student2 = new Student("Tunahan", 19);

Student1.greet();
student2.greet();

// B1,B2

class BankAcc {
  constructor(Owner, Balance) {
    this.Owner = Owner;
    this.Balance = Balance;
  }

  greet() {
    console.log(`hell0 ${this.Owner} `);
  }

  deposit(amount) {
    if (amount < 500) {
      this.Balance += amount;
      console.log(`deposited ${amount}, New Balance is: ${this.Balance}`);
    }
  }

  withdraval(amount) {
    if (amount > 501) {
      this.Balance -= amount;
      console.log(`withdraw ${amount}, new balance is : ${this.Balance}`);
    }
  }
}
const BankAcc1 = new BankAcc("Erkan", 500);

BankAcc1.greet();
BankAcc1.deposit(200);
BankAcc1.withdraval(BankAcc1.Balance);
//C1C2
