function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retornar nada.
  // Tu código:

  long = arrayOfNumbers.length;

  var suma = 0;

  for (let i = 0; i < long; i++) {
    const element = arrayOfNumbers[i];
    suma = element + suma;
  
  }
  cb(suma);
}

function callback(resultado) {}

sumarArray([1, 2, 3], callback);
module.exports = sumarArray;
