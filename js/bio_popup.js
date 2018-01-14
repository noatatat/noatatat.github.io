'use strict';

(function () {
  var bioPopup = document.querySelector('.bio');
  var infoBlock = document.querySelector('.summary__info-block');
  var closeButton = document.querySelector('.bio__close-button');
  bioPopup.classList.add('bio--popup');
  window.utils.hide(bioPopup);

  var bioButton = document.createElement('button');
  bioButton.type = 'button';
  bioButton.textContent = 'Краткая автобиография';
  bioButton.classList.add('bio__button');
  infoBlock.insertAdjacentElement('beforeend', bioButton);

  bioButton.addEventListener('click', function () {
    window.utils.show(bioPopup);
    closeButton.addEventListener('click', onCloseButtonPress);
    document.addEventListener('keydown', onPopupEscPress);
  });

  function onCloseButtonPress() {
    window.utils.hide(bioPopup);
    closeButton.removeEventListener('click', onCloseButtonPress);
  }

  function onPopupEscPress(evt) {
    if (evt.keyCode === 27) {
      window.utils.hide(bioPopup);
      document.removeEventListener('keydown', onPopupEscPress);
    }
  }
})();
