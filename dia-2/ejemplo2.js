class Cuenta {
  constructor(name, book) {
    this.name = name;
    this.book = book;
  }
}

class Comercial extends Cuenta {
  constructor(name, book) {
    super(name, book);
    this.tarifa = 0.02;
  }
}

class Personal extends Cuenta {
  constructor(name, book) {
    super(name, book);
    this.tarifa = 0.01;
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
  constructor(remit, receptor, amount, ref) {}

  addTransaction(transacción) {}

  calculaAmountForAccount(cuenta) {}

  findTransactionsForAccount(cuenta) {}
}

let transacción = new Transaccion("paco", "pepa", "pipa", "juana");
let book = new Book();
let cuentaSara = new Personal("Sara", book);

console.log(cuentaSara);
console.log(transacción);
