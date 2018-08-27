(function () {
  'use strict';

  class SuriRoadmap extends Polymer.Element {
    static get is() { return 'suri-roadmap'; }

    _showHelpModal() {
      this.$.helpModal.openDialog();
    }
  }

  window.customElements.define(SuriRoadmap.is, SuriRoadmap);
})();
