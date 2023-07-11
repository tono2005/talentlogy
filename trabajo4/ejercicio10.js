function esCapicua(cadena) {
    let longitud = cadena.length;
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
      if (cadena[i] !== cadena[longitud - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  let numero = prompt("Introduce un número: ");
  if (esCapicua(numero)) {
    console.log("El número " + numero + " es capicúa.");
  } else {
    console.log("El número " + numero + " no es capicúa.");
  }
  