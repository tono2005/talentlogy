class Triangulo {
    constructor(lado1, lado2, lado3) {
      this.lado1 = lado1;
      this.lado2 = lado2;
      this.lado3 = lado3;
    }
  
    obtenerLadoMayor() {
      let mayor = Math.max(this.lado1, this.lado2, this.lado3);
      return mayor;
    }
  
    obtenerTipoTriangulo() {
      if (this.lado1 === this.lado2 && this.lado1 === this.lado3) {
        return "Equilátero";
      } else if (
        this.lado1 === this.lado2 ||
        this.lado1 === this.lado3 ||
        this.lado2 === this.lado3
      ) {
        return "Isósceles";
      } else {
        return "Escaleno";
      }
    }
  }
  
  const miTriangulo = new Triangulo(5, 5, 7);
  console.log("Lado mayor:", miTriangulo.obtenerLadoMayor());
  console.log("Tipo de triángulo:", miTriangulo.obtenerTipoTriangulo());
  