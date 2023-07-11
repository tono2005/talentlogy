class Cuenta {
    constructor() {
      this.saldo = 0;
    }
  
    ingreso(cantidad) {
      this.saldo += cantidad;
    }
  
    reintegro(cantidad) {
      if (this.saldo < cantidad) {
        console.log("No tienes suficiente saldo para hacer el reintegro.");
        return;
      }
      this.saldo -= cantidad;
    }
  
    transferencia(cantidad, cuentaDestino) {
      if (this.saldo < cantidad) {
        console.log("No tienes suficiente saldo para hacer la transferencia.");
        return;
      }
      this.saldo -= cantidad;
      cuentaDestino.ingreso(cantidad);
    }
  
    getSaldo() {
      return this.saldo;
    }
  
    setSaldo(saldo) {
      this.saldo = saldo;
    }
  }
  
  const miCuenta = new Cuenta();
miCuenta.ingreso(1000);
console.log(miCuenta.getSaldo()); 
console.log(miCuenta.getSaldo()); 

const otraCuenta = new Cuenta();
miCuenta.transferencia(250, otraCuenta);
console.log(miCuenta.getSaldo()); 
console.log(otraCuenta.getSaldo()); 