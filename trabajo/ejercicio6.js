let n = parseInt(prompt(" ingrese numero "));
//
let a = 0; b = 1; c = 1;
//aqui podemos decir que la variable a tiene un valor a o y la variable b tiene valor 1 y la variable c tiene un valor a 1
while (c <=n) {
    if (c%2== 1 ) {
        console.log(a + ".");
//aqui podemos decirle a la consola tome la variable a + un punto
        a = a + b;
    } else {
        console.log(b + ".");
//aqui podemos decirle a la consola que tome la variable b + un punto 
        b = b + a;
    }
    c = c + 1;
}