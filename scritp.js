import Temporizador from './temporizador.js';

const display = document.querySelectorAll('.time-input');
let timer = {
  hor: 0,
  min: 0,
  sec: 0,
  display
};


function limparInput(event) {
  if (/\d/g.test(event.key) ||
    ['ArrowRight', 'ArrowLeft', 'Backspace', 'Tab', 'Delete'].includes(event.key)) {
  } else {
    event.preventDefault();
  }
}

function autoPular(event, index, array) {
  let Timer = event.target.dataset.timer;
  let Value = event.target.value;
  if (isNaN(Value)) event.target.value = 0;

  if (Timer === 'hor' && Value >= 99) {
    event.target.value = 99;
  } else if ((Timer === 'min' || Timer === 'sec') && Value >= 59) {
    event.target.value = 59;
  }

  timer[event.target.dataset.timer] = Number(event.target.value);

  if (event.target.value.length >= 2 && index < array.length - 1) {
    array[index + 1].focus();
  }
}

display.forEach((item, index, array) => {
  item.setAttribute('maxlength', 2);
  item.addEventListener('keydown', limparInput);
  item.addEventListener('input', (event) => {
    autoPular(event, index, array);
  });
});

const temporizador = new Temporizador({
  timer,
  btnPlay: document.querySelector('[data-action="start"]'),
  btnPause: document.querySelector('[data-action="pause"]'),
  btnReset: document.querySelector('[data-action="reset"]'),
}
);
temporizador.init();