function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:

  var restoPar = a % 2;
  var restoDivisiblePorTres = a % 3;
  var stop = false;

  while(restoPar == 0){
    stop = true; 
    if (restoDivisiblePorTres == 0) {
      return true;
    } else {
      return false;
    }

  }

  return false;
}

module.exports = esParYDivisiblePorTres;