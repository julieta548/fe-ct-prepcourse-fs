function sort(sortBy, list) {
  // La función sort recibe dos parámetros:
  // sortBy: una letra (string).
  // list: un arreglo de objetos.
  // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
  // a partir de la letra recibida. Por ejemplo:
  // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
  // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
  // Tu código:

var propiedades = [];

  for (let i = 0; i < array.length; i++) {
   const element = array[i];
   for(var prop in element) {
   propiedades.push(prop);
   }
   
  }

  var sorted = list.sort((a, b) => {
   const prop1 = a..toUpperCase();
   const prop2 = b.sortBy.toUpperCase();

  })

}


sort("a", [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
]);

module.exports = sort;
