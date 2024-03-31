function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:

  var boolean = num > 20 && num < 50;

  // switch(boolean){
  //   case true: return boolean;
  //   case false: return boolean;
  // }
  return boolean;

}

module.exports = estaEnRango;
