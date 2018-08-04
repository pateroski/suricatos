(function () {
  'use strict';

  class SuriWelcome extends Polymer.Element {
    static get is() { return 'suri-welcome'; }

    static get properties() {
      return {

      };
    }

    _setCountDown() {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      let countDown = new Date('Oct 13, 2018 13:00:00').getTime();
      setInterval(() => {

        let now = new Date().getTime();
        let distance = countDown - now;

        this.$.days.innerText = Math.floor(distance / (day));
        this.$.hours.innerText = Math.floor((distance % (day)) / (hour));
        this.$.minutes.innerText = Math.floor((distance % (hour)) / (minute));
        this.$.seconds.innerText = Math.floor((distance % (minute)) / second);

      }, second);
    }

    ready() {
      super.ready();
      this._setCountDown();
    }
  }

  window.customElements.define(SuriWelcome.is, SuriWelcome);
})();
