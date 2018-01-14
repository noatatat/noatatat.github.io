'use strict';

(function () {
  var bioPopup = document.querySelector('.bio');
  var infoBlock = document.querySelector('.summary__info-block');
  var closeButton = document.querySelector('.bio__close-button');
  console.log(closeButton);
  bioPopup.classList.add('bio--popup');
  hide(bioPopup);

  var bioButton = document.createElement('button');
  bioButton.type = 'button';
  bioButton.textContent = 'Краткая автобиография';
  bioButton.classList.add('bio__button');
  infoBlock.insertAdjacentElement('beforeend', bioButton);

  bioButton.addEventListener('click', function () {
    show(bioPopup);
    closeButton.addEventListener('click', onCloseButtonPress);
  });

  function show(element) {
    element.classList.remove('visually-hidden')
  }

  function hide(element) {
    element.classList.add('visually-hidden')
  }

  function onCloseButtonPress() {
    hide(bioPopup);
    closeButton.removeEventListener('click', onCloseButtonPress);
  }
})();
