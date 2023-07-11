let nota1 = parseInt(prompt(" ingrese la primera nota "));
//aqui podemos ver que le estamos pidiniendo al usuario que ingrese la primera nota
let nota2 = parseInt(prompt(" ingrese la segunda nota "));
//aqui podemos ver que le estamos pidiendo al usuario que ingrese la segunda nota
let nota3 = parseInt(prompt(" ingrese la tercera nota "));
////aqui podemos ver que le estamos pidiendo al usuario que ingrese la tercera nota

let nota4 = parseInt(prompt(" ingrese la cuarta nota "));
////aqui podemos ver que le estamos pidiendo al usuario que ingrese la cuarta nota

let nota5 = parseInt(prompt(" ingrese la quinta nota "));
////aqui podemos ver que le estamos pidiendo al usuario que ingrese la quinta nota

let promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
//aqui estamos diciendo que la varia nota1,nota2,nota3,nota4,nota5, se suma las notas y luegho se divide entre 5
let final = promedio;
//aqui estamos viendo que la variable final es igual a promedio
if (final >50) {
//aqui estamos diciendo que la variable final es mayor que 50
    console.log(" su nota es:" + final + " aprobo. ");
//aqui le estamos diciendo a la consola que nos muestre un mensaje al usuario es " su nota es " mas la variable final mas " aprobo"
} else {
    console.log(" su nota es:" + final + " reprobo. ");
//aqui le estamos diciendo a la consola que nos muestre un mensaje al usuario es " su nota es " mas la variablre final  mas "reprobo "
}