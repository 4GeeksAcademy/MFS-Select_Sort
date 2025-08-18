import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let cartasGeneradas = [];
window.onload = function () {
  const drawButton = document.getElementById('draw-button');
  drawButton.addEventListener("click", generadorCartas);

  const sortButton = document.getElementById('sort-button');
  sortButton.addEventListener("click", bubbleSort);
};

function generadorCartas() {
  const pinta = ['♦', '♥', '♠', '♣'];
  const numero = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const valores = { "A": 1, "J": 11, "Q": 12, "K": 13 };

  const drawButton = document.getElementById('draw-button')

  const cantidad = parseInt(document.getElementById('num-cards').value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Ingresar un número válido de cartas.');
    return;
  }
  cartasGeneradas = [];//reiniciar//


  const contenedor = document.getElementById('card-container');
  contenedor.innerHTML = '';
  document.getElementById('sort-container').innerHTML = '';

  for (let i = 0; i < cantidad; i++) {
    const randomPinta = pinta[Math.floor(Math.random() * pinta.length)];
    const randomNumero = numero[Math.floor(Math.random() * numero.length)];
    //convertir A-Q-J-K
    let valorNumerico = valores[randomNumero] || parseInt(randomNumero);

    cartasGeneradas.push({
      numero: randomNumero,
      pinta: randomPinta,
      valor: valorNumerico
    });

    const cartaDiv = document.createElement('div');
    cartaDiv.classList.add('card');
    cartaDiv.innerHTML = `${randomNumero} ${randomPinta}`;

    if (randomPinta === '♥' || randomPinta === '♦') {
      cartaDiv.style.color = 'red';
    }

    contenedor.appendChild(cartaDiv);
  }
}


//SELECT SORT//





/*funcion MOSTRAR CARTAS*/
/*function mostrarCartasOrdenadas() {
  const sortContainer = document.getElementById('sort-container');
  sortContainer.innerHTML = '';

  cartasGeneradas.forEach(carta => {
    let cartaDiv = document.createElement('div');
    cartaDiv.className = 'card';
    cartaDiv.textContent = carta.numero + " " + carta.pinta;
    if (carta.pinta === '♥' || carta.pinta === '♦') {
      cartaDiv.style.color = 'red';
    }
    sortContainer.appendChild(cartaDiv);
  });
}*/

