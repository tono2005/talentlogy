var tiempo1 = prompt("Tiempo del corredor 1:");
var tiempo2 = prompt("Tiempo del corredor 2:");
var tiempo3 = prompt("Tiempo del corredor 3:");

var llegada = document.getElementById("llegada");
llegada.children[tiempo1-1].innerHTML = "Corredor 1";
llegada.children[tiempo2-1].innerHTML = "Corredor 2";
llegada.children[tiempo3-1].innerHTML = "Corredor 3";
