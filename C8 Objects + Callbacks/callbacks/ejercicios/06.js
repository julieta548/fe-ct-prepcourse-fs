function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  var arregloNuevo = array.map(cb);
  console.log(arregloNuevo);
  return arregloNuevo;
}

function callback(elemento) {
 var suma = elemento + 1;
 return suma;
}

map([1, 2], callback);

module.exports = map;
