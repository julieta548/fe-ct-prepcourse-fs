function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  var esAnagrama = false;
  var coincidencia = false;
  var letrasCoincidentes = [];

  if (str1.length == str2.length) {
    var arrString1 = str1.split("");
    var arrString2 = str2.split("");
    for (let i = 0; i < arrString1.length; i++) {
      const element1 = arrString1[i];
      for (let j = 0; j < arrString2.length; j++) {
        const element2 = arrString2[j];
        if (element1 == element2) {
          letrasCoincidentes.push(element2);
          console.log(letrasCoincidentes);
        }
      }
    }

    if (letrasCoincidentes == str1) {
      return true;
    } else {
      return false;
    }
  } else if (str1 == "" && str2 == "") {
    return false;
  } else if (str1 == str2 && letrasCoincidentes !== str1) {
    return false;
  } else if (str1 == str2 && letrasCoincidentes == str1) {
    return true;
  } else if (str1 !== str2) {
    return false;
  }
}

esAnagrama("amor", "roma");

module.exports = esAnagrama;
