//console.log('works!');
/* DOM */
//variables para html
const $contador = document.getElementById('contador'); //Devuelve una referencia al elemento por su ID
const $btnIncrementar = document.getElementById('btnIncrement');
const $btnDecrementar = document.getElementById('btnDecrement');

let contador = 0;

$contador.textContent = contador; //retorna el contenido de texto de un elemento, actualiza el valor en html

function incrementar() {
  contador = contador + 2;
  $contador.textContent = contador;
}

function decrementar() {
  contador--;
  $contador.textContent = contador;
}

document.addEventListener('DOMContentLoaded', () => {
  $btnIncrementar.addEventListener('click', () => {
    incrementar();
    if (contador > 0) {
      $contador.classList.remove('red');
      $contador.classList.add('blue');
    }
    if (contador === 0) {
      $contador.classList.remove('red');
      $contador.classList.remove('blue');
    }
  });
  $btnDecrementar.addEventListener('click', () => {
    decrementar();
    if (contador < 0) {
      $contador.classList.remove('blue');
      $contador.classList.add('red');
    }
    if (contador === 0) {
      $contador.classList.remove('red');
      $contador.classList.remove('blue');
    }
  });
});