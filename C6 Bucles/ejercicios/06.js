function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  var numString = num.toString();
  var numArreglo = numString.split('');
  console.log(numArreglo);

  if (numArreglo.length == 3) {
    return true;
  } else {
    return false;
  }
 

}

tieneTresDigitos(543);

module.exports = tieneTresDigitos;
