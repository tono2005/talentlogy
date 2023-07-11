class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }
  
    esMayorDeEdad() {
      return this.edad >= 18;
    }
  }
  
  const persona1 = new Persona("Juan", 25);
  
  persona1.mostrarDatos();
  console.log(`¿Es mayor de edad?: ${persona1.esMayorDeEdad()}`);
  