let matriz = new Array(5);
for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
}

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    matriz[i][j] = parseInt(prompt(`Introduce el valor para la posición (${i},${j}):`));
  }
}

let sumaFilas = new Array(matriz.length).fill(0);
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    sumaFilas[i] += matriz[i][j];
  }
  console.log(`Suma de la fila ${i}: ${sumaFilas[i]}`);
}

let sumaColumnas = new Array(matriz[0].length).fill(0);
for (let j = 0; j < matriz[0].length; j++) {
  for (let i = 0; i < matriz.length; i++) {
    sumaColumnas[j] += matriz[i][j];
  }
  console.log(`Suma de la columna ${j}: ${sumaColumnas[j]}`);
}
