class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaCuentas = [];
    this.listaClientes = [];
    this.listaSuscriptores = [];
  }
  crearCliente(nombre) {
    let nombre = new Cliente(nombre);
    this.listaClientes.push(nombre);
  }
  crearCuenta(cliente) {
    let cuenta = new Cuenta(cliente, this);
    this.listaCuentas.push(cuenta);
    this.listaClientes.push(cliente);
    cliente.añadirCuenta(cuenta);
    return cuenta;
  }
  lanzarPublicidad() {}
}

class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaCuentas = [];
  }

  getSaldoTotal(cuenta) {}
  añadirCuenta(cuenta) {
    listaCuentas.push(cuenta);
  }
  leerPublicidad() {}
}

class Cuenta {
  constructor(tipo, cliente, banco, saldo) {
    this.tipo = tipo;
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = saldo;
  }
}

function createBanco() {
  return new Banco();
}

let banco = new Banco("Nube");
console.log(banco);
// let cliente1 = new Cliente("Sara Lùa");
