class Calculadora {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    suma() {
      return this.num1 + this.num2;
    }
  
    resta() {
      return this.num1 - this.num2;
    }
  
    multiplicacion() {
      return this.num1 * this.num2;
    }
  
    division() {
      if (this.num2 !== 0) {
        return this.num1 / this.num2;
      } else {
        return "Error: No se puede dividir entre cero.";
      }
    }
  }
  
  const num1 = parseInt(prompt("Ingresa el primer número:"));
  const num2 = parseInt(prompt("Ingresa el segundo número:"));
  
  const miCalculadora = new Calculadora(num1, num2);
  
  console.log("Suma:", miCalculadora.suma());
  console.log("Resta:", miCalculadora.resta());
  console.log("Multiplicación:", miCalculadora.multiplicacion());
  console.log("División:", miCalculadora.division());