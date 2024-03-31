function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  console.log(objetoUsuario)
  if (objetoUsuario.password === password) {
    return true; 
  } else { 
    return false;
  }

}

verificarPassword({password: "1234"}, 1234);

module.exports = verificarPassword;
