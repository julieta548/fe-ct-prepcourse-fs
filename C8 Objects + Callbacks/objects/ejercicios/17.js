function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:


  objetoUsuario.password = nuevaPassword;
  console.log(objetoUsuario);
  return objetoUsuario;
}

actualizarPassword({password: '1234'}, '12345');

module.exports = actualizarPassword;
