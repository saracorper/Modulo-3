class Nave {
  constructor(nombre, pv, danho) {
    this.nombre = nombre;
    this.pv = pv;
    this.danho = danho;
  }

  get Estado() {
    if (this.pv <= 0) {
      return "destruido";
    } else {
      return "Activo";
    }
  }

  seleccionarObjetivo() {
    //Por desarrollar
  }

  disparar(naveobj, daño) {
    let objetivo = seleccionarObjetivo();
    objetivo.recibirDisparo(daño);
    recibirDisparo(nave);
  }

  recibirDisparo(danho) {
    this.pv = this.pv - danho;
  }
}

class Galactica extends Nave {
  constructor() {
    super("Galactica", 5, 10);
  }
}
class Lancer extends Nave {
  constructor() {
    super("Lancer", 10, 5);
  }
}

class Discovery extends Nave {
  constructor() {
    super("Discovery", 7, 8);
  }
}

class Ejercito {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaNaves = [];
  }
  anadirNaves(nave) {
    this.listaNaves.push(nave);
  }

  estado() {
    for (let i = 0; i < listaNaves.length; i++) {
      console.log(listaNaves[i].Estado);
    }
  }
  derrotado() {
    listaNaves.forEach(nave => {
      if (nave.Estado != "destruido") {
        return "No derrotado";
      }
    });
    return "Derrotado";
  }
}

class GenerarNaves {
  constructor() {}
  crearGalacticas(numNaves, ejercito) {
    for (let i = 1; i <= numNaves; i++) {
      let nuevaNave = new Galactica();
      ejercito.anadirNaves(nuevaNave);
    }
  }

  crearLancers(numNaves, ejercito) {
    for (let i = 1; i <= numNaves; i++) {
      let nuevaNave = new Lancer();
      ejercito.anadirNaves(nuevaNave);
    }
  }

  crearDiscoverys(numNaves, ejercito) {
    for (let i = 1; i <= numNaves; i++) {
      let nuevaNave = new Discovery();
      ejercito.anadirNaves(nuevaNave);
    }
  }

  crearEjercito(nombre, numDisc, numLancer, numGalac) {
    let ejercito = new Ejercito(nombre);
    this.crearGalacticas(numGalac, ejercito);
    this.crearLancers(numLancer, ejercito);
    this.crearDiscoverys(numDisc, ejercito);
    return ejercito;
  }
  distribuirEjercito(ejercito, campoBatalla) {
    campoBatalla.EstablecerEjercito(ejercito);
  }
}

class CampoBatalla {
  constructor() {
    this.sectores = [];
    this.ejercitos = [];
  }
  //indice 0 bueno indice 1 malo
  //indice 0 sectorbueno indice 1 sectormal

  EstablecerEjercito(ejercito) {
    campoBatalla.ejercitos.push(ejercito);
    campoBatalla.sectores.push(ejercito.listaNaves);
  }
}

class Sector {
  constructor() {
    this.espacios = [];
  }
  obtenerElemetosPosicion(posicion) {
    return this.espacios[posicion];
  }
}

let generador = new GenerarNaves();
let ejercitoBueno = generador.crearEjercito("Bueno", 2, 3, 4);
console.log(ejercitoBueno);
let ejercitoMalo = generador.crearEjercito("Malo", 3, 4, 2);
console.log(ejercitoMalo);
const campoBatalla = new CampoBatalla();
generador.distribuirEjercito(ejercitoBueno, campoBatalla);
generador.distribuirEjercito(ejercitoMalo, campoBatalla);
let sector = new Sector();
sector.espacios = ejercitoBueno.listaNaves;
console.log(sector);

console.log(sector.obtenerElemetosPosicion(5));




