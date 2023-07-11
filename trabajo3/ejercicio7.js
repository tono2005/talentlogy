// Pedimos al usuario que introduzca los números separados por comas
const numeros = prompt('Introduce los números separados por comas:');
// Creamos un array a partir de los números introducidos
const arrayNumeros = numeros.split(',').map(numero => parseInt(numero));
// Multiplicamos cada número del array por 2 utilizando el método "map"
const arrayMultiplicado = arrayNumeros.map(numero => numero * 2);
// Mostramos el contenido del array multiplicado por pantalla
console.log(`Array multiplicado: ${arrayMultiplicado.join(', ')}`);