function calcularPropina(compra,propina){
let mensaje = parseInt(prompt(" ingresa el total de la compra "));
let mensaje2 = parseInt(prompt(" ingresa el total de la propina "));

    return function(propina){
    return compra / 100 * propina
    }
}
let total = calcularPropina(20000);
console.log(total(14));

function calcularPropina2(compra2,propina2){
    let mensaje3 = parseInt(prompt(" ingresa el total de la segunda compra "));
    let mensaje4 = parseInt(prompt(" ingresa el total de la segunda propina "));
    
    return function(propina2){
        return compra2 / 100 * propina2
    }
}
let toal2 = calcularPropina2(30000);
console.log(toal2(20));

function calcularPropina3(compra3,propina3){
    let mensaje5 = parseInt(prompt(" ingresa el total de la tercera compra "));
    let mensaje6 = parseInt(prompt(" ingresa el total de la tercera compra "));

    return function(propina3){
        return compra3 / 100 * propina3
    }

}
let total3 = calcularPropina3(40000);
console.log(total3(25));

function calcularPropina4(compra4,propina4){
    let mensaje7 = parseInt(prompt(" ingrese el total de la cuarta compra"));
    let mensaje8 = parseInt(prompt(" ingresa el total de la cuarta propina "));

    return function(propina4){
        return compra4 / 100 * propina4
    }

}
let total4 = calcularPropina4(50000);
console.log(total4(33));

function suma(totaldelapropina){
    console.log(" el total de las propinas es: "  + totaldelapropina);
}
suma(14 + 20 + 25 + 33)
