var lenguajes = ["JavaScript", "HTML", "CSS", "Python", "Java"];

    var listaLenguajes = document.getElementById("lenguajes");

    for (var i = 0; i < lenguajes.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(lenguajes[i]));
      listaLenguajes.appendChild(li);
    }