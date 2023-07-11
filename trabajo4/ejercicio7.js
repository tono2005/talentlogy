let fecha = prompt("Introduce tu fecha de nacimiento en formato dd/mm/aaaa: ");
let partesFecha = fecha.split("/");
let dia = partesFecha[0].length === 1 ? "0" + partesFecha[0] : partesFecha[0];
let mes = partesFecha[1].length === 1 ? "0" + partesFecha[1] : partesFecha[1];
let anio = partesFecha[2];
console.log("Día: " + dia);
console.log("Mes: " + mes);
console.log("Año: " + anio);