const nombreCompleto = prompt("Por favor, introduce tu nombre completo:");

console.log(nombreCompleto.toLowerCase());

console.log(nombreCompleto.toUpperCase());

const palabras = nombreCompleto.split(" ");

const palabrasMayusculas = [];

for (let i = 0; i < palabras.length; i++) {
  const palabra = palabras[i];
  
  const primeraLetraMayuscula = palabra.charAt(0).toUpperCase();
  
  const restoPalabraMinuscula = palabra.slice(1).toLowerCase();
  
  const palabraMayuscula = primeraLetraMayuscula + restoPalabraMinuscula;
  
  palabrasMayusculas.push(palabraMayuscula);
}

console.log(palabrasMayusculas.join(" "));