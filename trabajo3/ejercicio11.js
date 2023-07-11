const tamano = parseInt(prompt('Introduce el tamaño del array: '));
const numero = parseInt(prompt('Introduce el número del que se calcularán los múltiplos: '));

const arrayMultiplos = [];
for (let i = 1; i <= tamano; i++) {
  arrayMultiplos.push(i * numero);
}


function mostrarArray(array) {
  console.log(`Contenido del array: ${array.join(', ')}`);
}

mostrarArray(arrayMultiplos);