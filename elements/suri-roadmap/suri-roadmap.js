(function () {
  'use strict';

  class SuriRoadmap extends Polymer.Element {
    static get is() { return 'suri-roadmap'; }

    static get properties() {
      return {

        moments: {
          type: Array,
          value: () => {
            return [
              {

              }
            ];
          }
        }
      };
    }

    _showHelpModal() {
      this.$.helpModal.openDialog();
    }
  }

  window.customElements.define(SuriRoadmap.is, SuriRoadmap);
})();
