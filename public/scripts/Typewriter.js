function Typewriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 120 * i);
  });
}

const titulo = document.querySelector("h1, h2");

Typewriter(titulo);
