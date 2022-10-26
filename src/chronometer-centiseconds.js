class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
    this.intervalId = setInterval(() => { this.currentTime++ }, 10)
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        printTimeCallback();
      }, 10);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1) {
      return `0${value.toString()}`;
    } else {
      return `${value.toString()}`;
    }
  }


  stop() {
    clearInterval(this.intervalId);
    if (this.start) {
      clearInterval(this.intervalId);
    }
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`
  }
}
