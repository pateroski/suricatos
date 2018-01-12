(function () {
  'use strict';

  class Suri404 extends Polymer.Element {

    static get is() { return 'suri-404'; }

    static get properties() {
      return {
        // This shouldn't be neccessary, but the Analyzer isn't picking up
        // Polymer.Element#rootPath
        rootPath: String,
      };
    }
  }

  window.customElements.define(Suri404.is, Suri404);
})();
