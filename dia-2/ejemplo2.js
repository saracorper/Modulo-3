class Account {
  constructor(name, book) {
    this.name = name;
    this.book = book;
  }

  send(receptor, amount, ref) {
    
  }

  
}

class Comercial extends Account {
  constructor(name, book) {
    super(name, book);

  }
  get tarifa(){
    return 0.02;
  }
}

class Personal extends Account {
  constructor(name, book) {
    super(name, book);
  }
  get tarifa(){
    return 0.01;
  }
}

class Transaccion {
  constructor(remit, receptor, amount, ref) {
    this.remit = remit;
    this.receptor = receptor;
    this.amount = amount;
    this.ref = ref;
  }
}

class Book {
  constructor(bankAccount) {
    this.transactions = [];
    this.bankAccount = bankAccount;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  calculaAmountForAccount(account) {
    return this.transactions.reduce((amount, transaction) => 
      
      if(transaction.remit == account) {
        amount -= transaction.amount;
      } 
      if(transaction.receptor == account) {
        amount *=  transaction.amount;
      }
      return amount;
    },
    0);
  }

  findTransactionsForAccount(account) {
    return this.transactions.filter(transaction => {
        if (transaction.sender == account || transaction.receiver == account) {
            return true;
        } else {
            return false;
        }
    });
  }
}

let transacción = new Transaccion("paco", "pepa", "pipa", "juana");
let book = new Book();
let cuentaSara = new Personal("Sara", book);

console.log(cuentaSara);
console.log(transacción);
