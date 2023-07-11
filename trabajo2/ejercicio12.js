function numeroRecursivo(N){
   let = resultado = arguments[1] || [];
   if(!N){
    return resultado;
   }
   resultado.push(N);
   numeroRecursivo(N - 1, resultado);
   return resultado;
  }
  console.log(numeroRecursivo(100));
