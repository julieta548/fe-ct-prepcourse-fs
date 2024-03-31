function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  var esMayorOigual;

  if (edad >= 18) {
    esMayorOigual = true;
  } else if(edad < 18){
    esMayorOigual = false;
  }

  switch(esMayorOigual){
    case true: return "Allowed";
    break;
    case false: return "Not allowed";
    break;
  }

}

mayoriaDeEdad(10);

module.exports = mayoriaDeEdad;
