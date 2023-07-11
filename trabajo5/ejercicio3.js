class Cuenta {
    constructor(titular, cantidad = 0) {
      this.titular = titular;
      this.cantidad = cantidad;
    }
  
    setTitular(titular) {
      this.titular = titular;
    }
  
    setCantidad(cantidad) {
      this.cantidad = cantidad;
    }
  
    getTitular() {
      return this.titular;
    }
  
    getCantidad() {
      return this.cantidad;
    }
  
    toString() {
      return `Titular: ${this.titular}\nCantidad: ${this.cantidad}`;
    }
  
    
    ingresar(cantidad) {
      if (cantidad > 0) {
        this.cantidad += cantidad;
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && this.cantidad - cantidad >= 0) {
        this.cantidad -= cantidad;
      } else {
        this.cantidad = 0;
      }
    }
  }

  const miCuenta = new Cuenta("Juan Pérez", 100);


console.log(miCuenta.toString()); 

miCuenta.ingresar(50);
console.log(miCuenta.getCantidad());


miCuenta.retirar(75);
console.log(miCuenta.getCantidad());