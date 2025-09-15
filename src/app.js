import "bootstrap";
import "./style.css";

let cartasGeneradas = [];

window.onload = function () {
  const drawButton = document.getElementById('draw-button');
  drawButton.addEventListener("click", generadorCartas);

  const sortButton = document.getElementById('sort-button');
  sortButton.addEventListener("click", () => {
    document.getElementById('sort-container').innerHTML = '';
    selectSort(cartasGeneradas);
    mostrarCartasOrdenadas();
  });
};

function generadorCartas() {
  const pinta = ['♦', '♥', '♠', '♣'];
  const numero = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const valores = { "A": 1, "J": 11, "Q": 12, "K": 13 };

  const cantidad = parseInt(document.getElementById('num-cards').value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Ingresar un número válido de cartas.');
    return;
  }
  cartasGeneradas = []; //reiniciar//

  const contenedor = document.getElementById('card-container');
  contenedor.innerHTML = '';


  for (let i = 0; i < cantidad; i++) {
    const randomPinta = pinta[Math.floor(Math.random() * pinta.length)];
    const randomNumero = numero[Math.floor(Math.random() * numero.length)];
    const valorNumerico = valores[randomNumero] || parseInt(randomNumero);

    cartasGeneradas.push({
      numero: randomNumero,
      pinta: randomPinta,
      valor: valorNumerico
    }
    );
    const cartaDiv = document.createElement('div');
    cartaDiv.classList.add('card');
    cartaDiv.innerHTML = `${randomNumero} ${randomPinta}`;

    if (randomPinta === '♥' || randomPinta === '♦') {
      cartaDiv.style.color = 'red';
    }
    contenedor.appendChild(cartaDiv);
  }
}

const selectSort = (arr) => {
  let min = 0;
  let step = 1;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min].valor > arr[i].valor) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        SortStep(arr, step);
        step++;
      }
    }
    min++;
  }
  return arr;
};

function SortStep(arr, step) {
  const sortContainer = document.getElementById('sort-container');

  const stepDiv = document.createElement('div');
  stepDiv.classList.add('step');
  stepDiv.innerHTML = `<h5>Step ${step}</h5>`;

  arr.forEach(carta => {
    let cartaDiv = document.createElement('div');
    cartaDiv.className = 'card';
    cartaDiv.textContent = carta.numero + " " + carta.pinta;
    if (carta.pinta === '♥' || carta.pinta === '♦') {
      cartaDiv.style.color = 'red';
    }
    stepDiv.appendChild(cartaDiv);
  });
  sortContainer.appendChild(stepDiv);
}
function mostrarCartasOrdenadas() {
  const sortContainer = document.getElementById('sort-container');

  const finalResultDiv = document.createElement('div');
  finalResultDiv.classList.add('final-step');
  cartasGeneradas.forEach(carta => {
    let cartaDiv = document.createElement('div');
    cartaDiv.className = 'card';
    cartaDiv.textContent = carta.numero + " " + carta.pinta;
    if (carta.pinta === '♥' || carta.pinta === '♦') {
      cartaDiv.style.color = 'red';
    }
    finalResultDiv.appendChild(cartaDiv);
  });
  sortContainer.appendChild(finalResultDiv);
}

