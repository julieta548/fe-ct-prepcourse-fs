function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  function verificarEdad() {
    var fecha = new Date();
    var fechaNac = new Date(fechaNacimiento);

    var anioNacimiento = fechaNac.getFullYear();
    var mesNacimiento = fechaNac.getMonth() + 1;
    var diaNacimiento = fechaNac.getDay();

    var anioActual = fecha.getFullYear();
    var mesActual = fecha.getMonth() + 1;
    var diaActual = fecha.getDay();

    var edad = anioActual - anioNacimiento;

    if (edad == 18) {
      if (mesNacimiento > mesActual) {
        return false;
      } else if (mesNacimiento == mesActual) {
        if (diaNacimiento > diaActual) {
          return false;
        } else if (diaNacimiento == diaActual) {
          return true;
        } else if (diaNacimiento < diaActual) {
          return true;
        }
      } else if (mesNacimiento < mesActual) {
        return true;
      }
    } else if (edad < 18) {
      return false;
    } else if (edad > 18) {
      return true;
    }
  }

  if (verificarEdad()) {
    return true;
  } else {
    return false;
  }
}

esMayorDeEdad("2006-03-25");

module.exports = esMayorDeEdad;
