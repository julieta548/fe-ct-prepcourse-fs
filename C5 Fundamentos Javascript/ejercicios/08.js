function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  const centinela = NaN;
  const rounded = Math.round(numero);

  if (rounded > numero) {
    return false;
  } else if (rounded < numero) {
    return false;
  } else if (rounded === numero) {
    return true;
  } else if (typeof(rounded) == typeof(centinela)){
    return false; 
  }
}

esNumeroEntero(-5);

module.exports = esNumeroEntero;
