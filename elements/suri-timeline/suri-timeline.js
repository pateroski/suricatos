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
        _verticalTimeLine: {
          type: Object
        },
        _blocks: {
          type: Array,
          computed: '_computeBlocks(_verticalTimeLine)'
        },
        _icons: {
          type: Array,
          computed: '_computeIcons(_verticalTimeLine)'
        },
        _contents: {
          type: Array,
          computed: '_computeContents(_verticalTimeLine)'
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

    _computeBlocks(timeline) {
      return timeline.getElementsByClassName('js-suri-block');
    }

    _computeIcons(timeline) {
      return timeline.getElementsByClassName('js-suri-icon');
    }

    _computeContents(timeline) {
      return timeline.getElementsByClassName('js-suri-content');
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

    ready() {
      super.ready();
      this._verticalTimeLine = this.$.timeLine;

      // show timeline blocks on scrolling
      window.addEventListener('scroll', () => {
        // debugger;
        if (!this._scrolling && this._blocks.length !== 0) {
          this.set('_scrolling', true);
          this.checkTimelineScroll();
        }
      });
    }
  }


  window.customElements.define(SuriTimeline.is, SuriTimeline);
})();