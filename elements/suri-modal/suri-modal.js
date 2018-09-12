(function () {
  'use strict';

  class SuriModal extends Polymer.Element {
    static get is() { return 'suri-modal'; }

    static get properties() {
      return {
        /**
         * Path Source image
         * @type {String}
         */
        image: {
          type: String,
          value: ''
        },

        /**
         * Title message
         * @type {String}
         */
        title: {
          type: String,
          value: ''
        },

        /**
         * Description message
         * @type {String}
         */
        description: {
          type: String,
          value: ''
        },

        /**
         * Action suggestion message
         * @type {String}
         */
        suggestion: {
          type: String,
          value: ''
        }

      };
    }

    /**
     * Open modal action for showing the content
     */
    openDialog() {
      this.$.dialog.open();
      document.body.appendChild(this);
    }

    exitDialog() {
      this.$.dialog.close();
      this.remove();
    }

    cancelDialog() {
      this.remove();
    }
  }

  window.customElements.define(SuriModal.is, SuriModal);
})();