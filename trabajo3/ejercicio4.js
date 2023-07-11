

let notas = [12, 15, 18, 7, 9, 11, 20, 13, 10];
let aprobados = [];
let desaprobados = [];

// Separar las notas aprobadas y desaprobadas
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 12) {
    aprobados.push(notas[i]);
  } else {
    desaprobados.push(notas[i]);
  }
}

// Calcular los promedios
let promedioAprobados = aprobados.reduce((a, b) => a + b, 0) / aprobados.length;
let promedioDesaprobados = desaprobados.reduce((a, b) => a + b, 0) / desaprobados.length;

// Mostrar resultados
console.log(`Cantidad de aprobados: ${aprobados.length}`);
console.log(`Cantidad de desaprobados: ${desaprobados.length}`);
console.log(`Promedio de aprobados: ${promedioAprobados}`);
console.log(`Promedio de desaprobados: ${promedioDesaprobados}`);
