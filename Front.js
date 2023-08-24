//Creacion del mazo
var mazo = [];
var barajado = [];
const pintas = ["clubs", "diamonds", "hearts", "spades"];

const CrearMazo = () => {
  for (let i = 1; i <= 13; i++) {
    for (let j = 0; j < 4; j++) {
      const carta = {
        numero: i,
        pinta: pintas[j],
        img: "img/PNG-cards/" + i + "_of_" + pintas[j] + ".png",
      };
      mazo.push(carta);
      mazo.push(carta);
    }
  }
};
const DuplicarMazo = () => {
  for (let i = 0; i < mazo.length; i++) {
    barajado.push(mazo[i]);
  }
  barajado.sort(function () {
    return Math.random() - 0.5;
  });
};

//Creacion de las manos de los jugadores
var manos = [];

const repartir = () => {
  const mano = [];
  for (let i = 1; i <= 11; i++) {
    mano.push(barajado[0]);
    barajado.shift();
  }
  manos.push(mano);
};
const DarCartas = () => {
  for (let i = 0; i < manos.length; i++) {
    for (let j = 0; j < manos[i].length; j++) {
      const cartaRepartir = manos[i][j];
      const imagen =
        "img/PNG-cards/" +
        cartaRepartir.numero +
        "_of_" +
        cartaRepartir.pinta +
        ".png";
      const contenedor = document.getElementById("espacio-" + j);
      contenedor.innerHTML = "";
      contenedor.insertAdjacentHTML(
        "beforeend",
        `<img src=${imagen} alt=${imagen} class="image">`
        )
      }
    }
};
const limpiarMano = () => {
  mazo = [];
  manos = [];
  barajado = [];
}
//Iniciar juego
playGame.onclick = () => {
  limpiarMano()
  CrearMazo();
  DuplicarMazo();
  repartir();
  DarCartas();
};
