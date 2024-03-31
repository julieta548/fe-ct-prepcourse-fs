function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:

  var numeros = [a, b];

  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    var esNegativo;
    var esIgual;

    if (i < (numeros.length - 1)) {
      if (element == numeros[i + 1] && element < 0 && numeros[i + 1] < 0) {
        return true;
      } else {
        esNegativo = false;
        esIgual = false;
        return false;
      }
    }

    if (element < 0) {
      esNegativo = true;
    } else {
      esNegativo = false;
      return false;
    }

    if (esNegativo == true) {
      if (element == numeros[i + 1]) {
        esIgual = true;
      } else {
        return false;
      }
    } else {
      return false;
    }

    if (i == 1 && esNegativo == true) {
      if (element == numeros[i - 1]) {
        esIgual = true;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

module.exports = esIgualYNegativo;
