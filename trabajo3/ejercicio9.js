let alumnos = [];

// Leer los datos de los alumnos
while (true) {
  let nombre = prompt("Introduce el nombre del alumno:");
  if (nombre === "*") {
    break;
  }
  let edad = parseInt(prompt("Introduce la edad del alumno:"));
  alumnos.push({ nombre, edad });
}

// Obtener los alumnos mayores de edad
let mayoresDeEdad = alumnos.filter(alumno => alumno.edad >= 18);
console.log("Alumnos mayores de edad:");
mayoresDeEdad.forEach(alumno => console.log(`${alumno.nombre} (${alumno.edad} años)`));

// Obtener la edad mayor y los alumnos que la poseen
let edadMayor = Math.max(...alumnos.map(alumno => alumno.edad));
let alumnosConEdadMayor = alumnos.filter(alumno => alumno.edad === edadMayor);
console.log(`Edad mayor: ${edadMayor}`);
console.log("Alumnos con la edad mayor:");
alumnosConEdadMayor.forEach(alumno => console.log(`${alumno.nombre} (${alumno.edad} años)`));