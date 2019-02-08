class Profesor {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this._edad = edad;
  }
  soyElProfe() {
    console.log("Soy el profe " + this.nombre);
  }

  get edadMinima() {
    return 12;
  }

  get edad() {
    return this._edad;
  }
  set edad(value) {
    if (value < edadMinima) {
      console.log("Demasiado joven para dar clase.");
      return;
    }
    this._edad = value;
  }
}

const profesor1 = new Profesor("Sara", 21);
console.log(profesor1.edad);
console.log(profesor1);
console.log(profesor1.edadMinima);
