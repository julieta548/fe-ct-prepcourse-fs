function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:

  var detenerse = false;

  while(detenerse == false){
    if (booleano1 && booleano2) {
      detenerse = true;
      return true;
    } else {
      detenerse = true;
      return false;
    }

  }
  

}

module.exports = esVerdaderoYFalso;
