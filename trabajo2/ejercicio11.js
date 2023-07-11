let numero = parseInt(prompt("Digite el número que desea convertir a binario"));
console.log("El número %d convertido a binario es:  ", numero);

function binario(numero){
    if(numero<2){
        return numero.toString();
    }else {
        return binario(Math.floor(numero / 2)) + (numero % 2).toString();
    }
}
const resultadoBinario = binario(numero);
console.log(resultadoBinario);
