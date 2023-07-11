const arrayNumeros = [10, 20, 30, 40, 50];
// Encontramos el número mayor del array utilizando el método "reduce"
const numeroMayor = arrayNumeros.reduce((mayor, numero) => numero > mayor ? numero : mayor);
// Encontramos el número menor del array utilizando el método "reduce"
const numeroMenor = arrayNumeros.reduce((menor, numero) => numero < menor ? numero : menor);
// Calculamos la media de los números del array utilizando el método "reduce"
const mediaNumeros = arrayNumeros.reduce((suma, numero) => suma + numero) / arrayNumeros.length;
// Mostramos los resultados por pantalla
console.log(`El número mayor es: ${numeroMayor}`);
console.log(`El número menor es: ${numeroMenor}`);
console.log(`La media de los números es: ${mediaNumeros}`);
