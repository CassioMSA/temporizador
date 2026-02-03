export default class Temporizador {
  constructor({ timer, btnPlay, btnPause, btnReset, }) {
    this.btnPlay = btnPlay;
    this.btnPause = btnPause;
    this.btnReset = btnReset;
    this.interval = null;
    this.timer = timer;
    this.display = timer.display;
  }


  calcularTempo() {
    this.interval = setInterval(() => {
      if (this.timer.hor <= 0 && this.timer.min <= 0 && this.timer.sec <= 0) {
        clearInterval(this.interval);
        this.interval = null;
        return;
      }
      if (this.timer.sec === 0) {
        this.timer.sec = 59;
        if (this.timer.min === 0) {
          this.timer.min = 59;
          this.timer.hor--;
        } else {
          this.timer.min--;
        }
      } else {
        this.timer.sec--;
      }
      this.atualizarTempo(this.timer.hor, this.timer.min, this.timer.sec);
    }, 1000)

  }

  formatarUnidade(valor) {
    if (valor < 10) {
      valor = valor.toString().padStart(2, "0");
    }
    return valor.toString();
  }

  atualizarTempo(hor, min, sec) {
    this.timer.display[0].value = `${this.formatarUnidade(hor)}`;
    this.timer.display[1].value = `${this.formatarUnidade(min)}`;
    this.timer.display[2].value = `${this.formatarUnidade(sec)}`;
  }

  reset(event) {
    event.preventDefault();
    this.pause();
    this.timer.hor = 0
    this.timer.min = 0
    this.timer.sec = 0
    this.interval = null;
    this.atualizarTempo(0, 0, 0);
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  start(event) {
    console.log(this.timer, this.display);
    event.preventDefault();
    if (!this.interval) {
      this.calcularTempo();
    }
  }

  adicionarEventoBotoes() {
    this.btnPlay.addEventListener('click', this.start);
    this.btnPause.addEventListener('click', this.pause);
    this.btnReset.addEventListener('click', this.reset);
  }

  bindEventos() {
    // Referencia o this na função de callback
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);

  }

  init() {
    this.bindEventos()
    this.adicionarEventoBotoes();
    return this;
  }
}

