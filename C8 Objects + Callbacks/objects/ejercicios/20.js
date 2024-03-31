function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  var sumaLikes = 0;

  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    const element = objetoUsuario.posts[i];
    for (var prop in element) {
      sumaLikes += element[prop];
    }
  }
  console.log(sumaLikes)
 return sumaLikes;
}

sumarLikesDeUsuario({
  posts: [{ likes: 1 }, { likes: 2 }, { likes: 1 }],
});

module.exports = sumarLikesDeUsuario;
