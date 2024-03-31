function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var arrayA = [];
  var arrayB = [];
  var arrayC = [];

  const numeroA = a;
  const numeroB = b;

  var valorAbsolutoA = numeroA.valueOf();
  var valorAbsolutoB = numeroB.valueOf();

  for (let i = 0; i < valorAbsolutoA; i++) {
    const numeroA = i + 1;
    var arrayAnueva = arrayA.push(numeroA);
  }

  for (let i = 0; i < valorAbsolutoB; i++) {
    const numeroB = i + 1;
    var arrayBnueva = arrayB.push(numeroB);
  }

  if (a < b) {
    arrayC = arrayB.filter((elemento) => elemento >= a);
    console.log(arrayC);
  } else if (a > b) {
    arrayC = arrayA.filter((elemento) => elemento >= b);
  } else if ((a = b)) {
    arrayC = [0];
  }

  var acumulacion;
  var resultado = 1;
console.log(arrayC)
  for (let i = 0; i <= arrayC.length; i++) {
    resultado *= arrayC[i] * resultado;
    console.log(resultado);

    // var siguiente = i + 1;
    // resultado = i * siguiente;
    // acumulacion = resultado * (siguiente + 1);
    // acumulacion = acumulacion * valorAbsolutoB;

    console.log(arrayC);
    return resultado;
  }
}

// var resultado = arrayC.map((i) => {
//   var siguiente = i + 1;
//   console.log(i)
//   var resultadoPrimero = acumulacion * i;
//   console.log(resultadoPrimero)
//   acumulacion = resultadoPrimero + acumulacion;
//   console.log(acumulacion);

//   return acumulacion;

// });

//   var diferencia = a - b;
//   var valorAbsoluto = diferencia.valueOf();

//   for (let i = valorAbsolutoA; i < valorAbsolutoB; i++) {
//     i = i + 1;
//     var arrayAmpliado = arrayA.push(valorAbsolutoA + 1);
//     arrayA[i]
//     console.log(arrayAmpliado);
//   }

/////// Sirve

// for (let i = 0; i < valorAbsolutoA; i++) {
//     const numeroB = i;
//     arrayB.push(numeroB);
//   }

//   for (let i = 0; i < valorAbsolutoB; i++) {
//     const numeroB = i;
//     arrayB.push(numeroB);
//   }
/////////

// for (let i = 0; i < arrayA.length; i++) {
//   const numeroA = arrayA[i];
//   for (let j = 0; j < arrayB.length; j++) {
//     const numeroB = arrayB[j];
//     var resultado = numeroA * numeroB;
//   }
//   return resultado;
// }

productoEntreNúmeros(2, 5);
module.exports = productoEntreNúmeros;
