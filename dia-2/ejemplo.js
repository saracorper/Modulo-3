class Poligono {
  constructor(nombre, lados) {
    this.nombre = nombre;
    this.lados = lados;
  }
  getArea() {}
}

class Triangulo extends Poligono {
  constructor(base, altura) {
    super("triangulo", 3);
    this.base = base;
    this.altura = altura;
  }
  getArea() {
    return (this.base * this.altura) / 2;
  }
}

class Circulo extends Poligono {
  constructor(radio) {
    super("circulo", 1);
    this.radio = radio;
  }

  getArea() {
    return Math.PI * this.radio * this.radio;
  }
}

class Paralepipedo extends Poligono {
  constructor(base, altura) {
    super("paralepipedo", 4);
    this.base = base;
    this.altura = altura;
  }

  getArea() {
    return this.base * this.altura;
  }
}

class Cuadrado extends Paralepipedo {
  constructor(lado) {
    super(lado, lado);
    this.nombre = "cuadrado";
  }
}

class Rombo extends Paralepipedo {
  constructor() {
    super(lado, lado);
    this.nombre = "rombo";
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
  }

  getArea() {
    return this.diagonal1 + this.diagonal2 / 2;
  }
}

let rombo = new Rombo(5, 5);
let triangulo = new Triangulo(4, 5);
let circulo = new Circulo(5);
let paralepipedo = new Paralepipedo(5, 5);
let cuadrado = new Cuadrado(10, 10);

console.log(cuadrado);
console.log(circulo);
console.log(triangulo);
console.log(paralepipedo);
console.log(cuadrado.getArea());
console.log(triangulo.getArea());
console.log(circulo.getArea());
console.log(rombo.getArea());
