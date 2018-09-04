(function () {
  'use strict';

  class SuriTimeline extends Polymer.Element {
    static get is() { return 'suri-timeline'; }

    static get observers() {
      return [
        '_shouldHideBlocks(_blocks, _icons, _contents)',
      ];
    }

    static get properties() {
      return {

        /**
         * {
         *  title: 'titleOfSection'
         *  content: 'textOrHTML'
         *  image: 'imgSrc'
         *  time: 'time or Date'
         *  icon: {
         *    name: 'iconName'
         *    color: 'backgroundColor'
         *  },
         *  showButton: false
         * }
         */
        moments: {
          type: Array,
          value: () => {
            return [];
          }
        },
        _blocks: {
          type: Array,
          value: () => {
            return [];
          }
        },
        _icons: {
          type: Array,
          value: () => {
            return [];
          }
        },
        _contents: {
          type: Array,
          value: () => {
            return [];
          }
        },
        _offset: {
          type: Number,
          value: 0.8
        },
        _scrolling: {
          type: Boolean,
          value: false
        }
      };
    }

    _isImgSrcPresent(imageSrc) {
      return imageSrc === '' || imageSrc === undefined || imageSrc === null;
    }

    _populateElementsInPage() {
      this.set('_blocks', this.shadowRoot.querySelectorAll('.js-suri-block'));
      this.set('_icons', this.shadowRoot.querySelectorAll('.js-suri-icon'));
      this.set('_contents', this.shadowRoot.querySelectorAll('.js-suri-content'));
    }

    _shouldHideBlocks(blocks, images, contents) {
      if (blocks.length !== 0 && images.length !== 0 && contents.length !== 0) {
        this.hideBlocks();
      }
    }


    hideBlocks() {
      Array.from(this._blocks).forEach((block, index) => {

        if (block.getBoundingClientRect().top > window.innerHeight * this._offset) {
          this._icons[index].classList.add('suri-is-hidden');
          this._contents[index].classList.add('suri-is-hidden');
        }

      });
    }

    showBlocks() {
      Array.from(this._blocks).forEach((block, index) => {

        if (this._contents[index].classList.contains('suri-is-hidden') && block.getBoundingClientRect().top <= window.innerHeight * this._offset) {
          this._icons[index].classList.add('suri-timeline__img--bounce-in');
          this._contents[index].classList.add('suri-timeline__content--bounce-in');
          this._icons[index].classList.remove('suri-is-hidden');
          this._contents[index].classList.remove('suri-is-hidden');
        }

      });
      this.set('_scrolling', false);
    }

    checkTimelineScroll() {
      this.showBlocks();
    }

    _showModal() {
      this.dispatchEvent(new CustomEvent('show-help-modal'));
    }

    ready() {
      this.addEventListener('dom-change', this._populateElementsInPage);
      super.ready();

      // show timeline blocks on scrolling
      window.addEventListener('scroll', () => {
        if (!this._scrolling && this._blocks.length !== 0) {
          this.set('_scrolling', true);
          this.checkTimelineScroll();
        }
      });
    }
  }


  window.customElements.define(SuriTimeline.is, SuriTimeline);
})();