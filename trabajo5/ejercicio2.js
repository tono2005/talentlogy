class Contador {
    constructor() {
      this.valor = 0;
    }
  
    incrementar() {
      this.valor++;
    }
  
    decrementar() {
      this.valor--;
    }
  
    getValor() {
      return this.valor;
    }
  
    setValor(valor) {
      this.valor = valor;
    }
  }
  const miContador = new Contador();

miContador.incrementar();
miContador.decrementar();

console.log(miContador.getValor()); 
miContador.setValor(42);
console.log(miContador.getValor());