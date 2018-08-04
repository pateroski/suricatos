(function () {
  'use strict';

  class SuriWelcome extends Polymer.Element {
    static get is() { return 'suri-welcome'; }

    static get properties() {
      return {
        images: {
          type: Array,
          value: () => {
            return [
              {
                mobile: '',
                desktop: '../../images/carousel/image1.jpeg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image2.jpeg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image3.jpeg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image4.jpeg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image5.jpeg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image6.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image7.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image8.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image9.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image10.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image11.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image12.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image13.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image14.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image15.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image16.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image17.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image18.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image19.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image20.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image21.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image22.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image23.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image24.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image25.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image26.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image27.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image28.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image29.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image30.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image31.jpg'
              },
              {
                mobile: '',
                desktop: '../../images/carousel/image32.jpg'
              },
            ];
          }
        }
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

    _moveBefore() {
      this.$.slider.movePrev();
    }

    _moveNext() {
      this.$.slider.moveNext();
    }

    ready() {
      super.ready();
      this._setCountDown();
    }
  }

  window.customElements.define(SuriWelcome.is, SuriWelcome);
})();
