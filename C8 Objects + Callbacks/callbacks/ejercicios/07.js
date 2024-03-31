function filter(arrayOfStrings, cb) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var arrConLetraA = arrayOfStrings.filter(cb);
   console.log(arrConLetraA);
   return arrConLetraA;
}

function cb (el) {
   if (el.startsWith('a')) {
      return el;
   }
}

filter(["ala", "Alejo", "acá", "hola"], cb);

module.exports = filter;
