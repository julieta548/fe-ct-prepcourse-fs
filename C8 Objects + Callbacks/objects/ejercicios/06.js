const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var length;
  var propiedades = [];

  for(var prop in objeto){
    propiedades.push(prop);
  }

  length = propiedades.length;
  console.log(length);
  return length;
};

contarPropiedades({prop1: 'valor1', prop2: 'valor2'})

module.exports = contarPropiedades;
