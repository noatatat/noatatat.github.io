'use strict';

(function () {
  window.utils = {
    hide: function (element) {
      element.classList.add('visually-hidden');
    },
    show: function (element) {
      element.classList.remove('visually-hidden')
    }
  };
})();
