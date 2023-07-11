let numero = parseInt(prompt("Digite el valor del numero, que desea convertir a letras de 1 a 10"));

function Unidades(numero){
    switch(numero){
        case 1: return "El numero que digito es el uno";
        case 2: return "El numero que digito es el dos";
        case 3: return "El numero que digito es el tres";
        case 4: return "El numero que digito es el cuatro";
        case 5: return "El numero que digito es el cinco";
        case 6: return "El numero que digito es el seis";
        case 7: return "El numero que digito es el siete";
        case 8 : return "El numero que digito es el ocho";
        case 9 : return "El numero que digito es el nueve";
        case 10: return "El numero que digito es el Diez";
        default: return "El numero que dijito esta fuera del rango"
    }
    return 
}
console.log(Unidades(numero));