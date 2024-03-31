function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:


  delete objeto[propiedad];
  console.log(objeto);
  return objeto;
}


module.exports = eliminarPropiedad;
