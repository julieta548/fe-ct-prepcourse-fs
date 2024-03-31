function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:

  // var hola = "Hola";
  // var nuevaString = hola.concat(" ");
  // var nombreConc = nombre.concat("!");
  // var fraseFinal = nuevaString.concat(nombreConc);

  var frase = "Hola " + nombre + "!";

  return frase;
}

module.exports = obtenerSaludo;