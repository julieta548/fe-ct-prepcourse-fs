function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   if (callback == undefined) {
      return string;
   } else if (string == '') {
      return '';
   } else {
      return callback(string);
   }

   

}

function cb (str){
   strCambiado = str.toUpperCase();
   console.log(strCambiado);
   return strCambiado;
}

cambiarCadena("cualquiera", cb);

module.exports = cambiarCadena;
