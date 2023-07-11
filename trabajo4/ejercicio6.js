let email = prompt("Introduce tu correo electrónico: ");
let nombre = email.split("@")[0];
let nuevoEmail = nombre + "@ceu.es";
console.log("Tu nuevo correo electrónico es: " + nuevoEmail);