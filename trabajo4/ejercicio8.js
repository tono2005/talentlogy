let productos = prompt("Introduce los productos de la cesta de la compra separados por comas: ");
let listaProductos = productos.split(",");
for (let i = 0; i < listaProductos.length; i++) {
  console.log(listaProductos[i].trim());
}