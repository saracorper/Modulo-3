// EJEMPLO 1

function Profesor(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const profesor1 = new Profesor("Marcos", 44);
console.log(profesor1.nombre);
profesor1.nombre = "Marcos Javier";
console.log(profesor1.nombre);
Profesor.prototype.soyElProfe = function() {
  console.log("Soy el profe " + this.nombre);
};

const profesor2 = new Profesor("Lula", 34);
Profesor.prototype.soyElProfe2 = function() {
  console.log("Soy la profe " + this.nombre);
};
Profesor.prototype.cumpleanos = function() {
  this.edad++;
  console.log("Tengo " + this.edad);
};

profesor1.soyElProfe();
profesor2.soyElProfe2();
profesor2.cumpleanos();
