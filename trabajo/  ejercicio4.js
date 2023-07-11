let numero = parseInt(prompt(" ingrese un numero "));
//aqui le estamos pregutando al usuraio que ingrese un numero.
let total = 1;
//aaqui decimo que la variable vale 1.
for (let i = 1; i <= numero; i++) {
//aqui decimo que estas aproximando 1 hasta el numero final 
    total = total*i;
  // aqui podemos decir que estamos tomano el total * i
}

console.log(" el factorial del numero " + numero + " es: " + total);
//aqui podemos darle al usuario un mensaje que dice " el factorial del numero es" la variable numero + es y tomamos la otra variable  que es