const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  // objeto[propiedad] = valor;
  objeto.genero = valor;
  console.log(objeto);
  return objeto;
};

agregarNuevaPropiedad({nombre: 'Luis', apellido: "Spinetta"}, 'género', 'Rock');

module.exports = agregarNuevaPropiedad;
