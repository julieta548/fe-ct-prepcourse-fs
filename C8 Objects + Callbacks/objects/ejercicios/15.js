function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  var propiedades = [];

  for (var prop in objeto) {
    propiedades.push(prop);
  }

  for (let i = 0; i < propiedades.length; i++) {
    const elemento = propiedades[i];
    if (elemento == propiedad) {
      return true;
    } else if (elemento != propiedad) {
      return false;
    }
  }
}

module.exports = tienePropiedad;
