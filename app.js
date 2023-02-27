document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "c", img: "images/Melancolia f.jpg" },
    { name: "css", img: "images/decepcion e.jpg" },
    { name: "html", img: "images/feliz b.png" },
    { name: "c", img: "images/miedo h.jpg" },
    { name: "css", img: "images/namorado d.png" },
    { name: "html", img: "images/rabioso c.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
});
