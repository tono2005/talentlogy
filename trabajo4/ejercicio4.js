 let pedir_palabra = prompt(" introduce la palabra, para mostralo luego al reves ")

 palabra = pedir_palabra.split("");

 palabra_reves = palabra.reverse();

 palabra_reves = palabra_reves.join("");

 alert(palabra_reves);