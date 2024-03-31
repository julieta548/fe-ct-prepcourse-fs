function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
 

  for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    const element = objetoMuchosUsuarios[i];
    for (var prop in element) {
      element[prop] = true;
    }
  }

  console.log(objetoMuchosUsuarios)

  return objetoMuchosUsuarios;
}

pasarUsuarioAPremium([{esPremium: false}, {esPremium: false}])

module.exports = pasarUsuarioAPremium;
