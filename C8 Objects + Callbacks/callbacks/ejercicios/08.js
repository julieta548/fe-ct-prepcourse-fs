const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  var arr = array.includes(callback);
  return arr;
};

function cb (el) {
  if (el !== 2) {
    return "No se encontró el elemento";
  } else if (el == 2) {
    return "Encontrado";
  } else if (el !== number){
    return "No se encontró el elemento";
  }
}

buscarElemento([2, 3, 4], cb);

module.exports = buscarElemento;
