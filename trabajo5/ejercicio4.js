class Alumno {
    constructor(nombre, nota) {
      this.nombre = nombre;
      this.nota = nota;
    }
  
    imprimirDatos() {
      console.log("Nombre: " + this.nombre);
      console.log("Nota: " + this.nota);
    }
  
    mostrarResultado() {
      console.log("Resultado: " + this.nota);
      if (this.nota >= 5) {
        console.log("¡Felicidades! Has aprobado.");
      } else {
        console.log("Lo siento, no has aprobado.");
      }
    }
  }
  
  
  const alumno1 = new Alumno("Juan", 7);
  alumno1.imprimirDatos();
  alumno1.mostra