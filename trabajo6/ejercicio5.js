let mensajePrincipal = "¡Bienvenido a la página principal!";
let colorPrincipal = "blue";

const secundariaLink = document.getElementById('secundariaLink');

secundariaLink.addEventListener('click', () => {
  window.location.href = 'pagina_secundaria.html';
});

secundariaLink.style.color = colorPrincipal;

console.log(mensajePrincipal);

let mensajeSecundaria = "¡Bienvenido a la página secundaria!";
    let colorSecundaria = "red";

    const principalLink = document.getElementById('principalLink');

    principalLink.addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    principalLink.style.color = colorSecundaria;

    console.log(mensajeSecundaria);