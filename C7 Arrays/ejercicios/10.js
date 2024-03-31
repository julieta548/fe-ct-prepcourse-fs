function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  var string;
  var masDe5 = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.length > 5) {
      string = element;
      masDe5.push(string);
    }
  }
  console.log(masDe5[0]);
  return masDe5[0];
}

obtenerPrimerStringLargo(["hola", "abcdefg", "abc", "abcdef"]);

module.exports = obtenerPrimerStringLargo;
