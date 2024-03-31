function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:


  if (objetoUsuario.email != undefined) {
    return true;
  } else if (objetoUsuario.email == undefined || objetoUsuario.email == null) {
    return false;
  }

}

tieneEmail({email: "julieta@gmail.com"})

module.exports = tieneEmail;
