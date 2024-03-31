function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:

  if (typeof x == "number" && typeof y == "number") {
    if (y != 0) {
      var div = x / y;
      return div;
    } else { 
      return false;
    }
  }
}

module.exports = divide;
