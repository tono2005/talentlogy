const arreglo = [{key: 1, nombre: "Pedro"},
                {key: 3, nombre: "Lola"},
                {key: 6, nombre: "Bruno"},
                {key: 7, nombre: "Jose"},
                {key: 3, nombre: "Rosa"}
            ];
let persona = arreglo.find(elemento => elemento.key==7);  
console.log(persona);                         