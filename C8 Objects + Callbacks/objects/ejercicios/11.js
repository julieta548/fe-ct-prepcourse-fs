function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:

  // objeto[metodo] = 0;
  // objeto = {
  //   metodo: function() {
  //     objeto.x = 7;
  //     return objeto.x;
 //   },
 // };
 // return objeto.metodo;

 objeto[metodo]();

}


module.exports = invocarMetodo;
