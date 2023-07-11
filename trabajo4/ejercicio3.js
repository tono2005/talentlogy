
const telefonoCompleto = prompt("Por favor, introduce tu número de teléfono con el siguiente formato: +34-123456789-12");

const telefonoSinPrefijo = telefonoCompleto.slice(4);

const telefonoSinExtension = telefonoSinPrefijo.slice(0, -3);

console.log(`El número de teléfono sin prefijo ni extensión es: ${telefonoSinExtension}`);