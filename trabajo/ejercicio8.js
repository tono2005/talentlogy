let numero = parseInt(prompt(" ingrese un numero "));
//aqui podemos decir que le estamos mostrando un mensaje al usuario
let total = 1;
///aqui podemos ver que la variable total tiene de valor 1
for ( let i = 1; i <= numero; i++) {
   total = total*i;
//aqui podemos ver que la variable total se multiplica por i
}

console.log(" el factorial del numero " + numero + " es: " + total);
//aqui podemos darle un mensaje de resultaldo al usuraio diciendo  " el factorial del numero " mas la variable numero " es " mas la variable total