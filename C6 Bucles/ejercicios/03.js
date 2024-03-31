function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  switch(typeof x){
    case 'number':
      if (typeof y == 'number') {
        if (x > y) {
          return x;
        } else if (x < y) {
          return y;
        } else if (x == y) {
          return x;
        }
      };
      break;
  }

}

module.exports = obtenerMayor;
