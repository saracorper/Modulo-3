// function upper_case(str)
// {
//   regexp = /^[A-Z]/;
//   if (regexp.test(str))
//    {
//      console.log("String's first character is uppercase");
//    }
//    else
//    {
//      console.log("String's first character is not uppercase");
//    }
// }
// upper_case('Abcd');
// upper_case('abcd');

// function factorial(numero){
//     if(numero == 1){
//         return 1;
//     }else{
//       return numero * factorial(numero-1);
//     }
// }

// var total = factorial(5);
// c
// 5*4*3*2*1

// 0! = 1;

// EJERCICIO 3

// function rango(a, b){
//     var siguiente = a+1;
//     if(siguiente == b){
//         return console.log("No se puede");
//     }else{
//         return siguiente + "," + rango(siguiente, b);
//
//     }
// }

// console.log(rango(2,9));

let n = 3;

let arr = Array(n);

arr[0] = "4 6 -1".split(" ").map(arrTemp => parseInt(arrTemp, 10));
arr[1] = "7 2 4".split(" ").map(arrTemp => parseInt(arrTemp, 10));
arr[2] = "10 4 3".split(" ").map(arrTemp => parseInt(arrTemp, 10));

const result = diagonalDifference(arr);
console.log(result);

function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let fila = 0; fila < arr.length; fila++) {
    console.log(fila);
    let todalafila = arr[fila];
    for (let columna = 0; columna < arr.length; columna++) {
      let valor = todalafila[columna];
      if (fila == columna) {
        diagonal1 = diagonal1 + valor;
        console.log("diagonal1 = " + diagonal1);
      }
      if (fila + columna == arr.length - 1) {
        diagonal2 = diagonal2 + valor;
        console.log("diagonal2 = " + diagonal2);
      }
    }
  }

  total = diagonal1 - diagonal2;

  return total;
}
