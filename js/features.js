'use strict';

(function () {
  var pseudoOffset = 30;
  var projects = document.querySelectorAll('.project__entry');
  var wrapper = document.querySelector('.wrapper');
  var infos = document.querySelectorAll('.project__info');
  [].forEach.call(infos, function (info) {
    window.utils.hide(info);
    info.classList.add('mouse-on');
  });

  [].forEach.call(projects, function (el) {
    el.addEventListener('mousemove', onProjectMouseMove);
  });

  function onProjectMouseMove(evt) {
    var start = {
      x: evt.clientX + pseudoOffset - wrapper.offsetLeft,
      y: evt.clientY + pageYOffset
    };
    var infoPopup = this.parentElement.querySelector('.project__info');

    infoPopup.style.top = start.y + 'px';
    infoPopup.style.left = start.x + 'px';
    window.utils.show(infoPopup);

    setTimeout(function () {
      window.utils.hide(infoPopup);
      this.removeEventListener('mouseout', onProjectMouseOut);
    }, 3000);

    infoPopup.addEventListener('mouseout', onProjectMouseOut);

    function onProjectMouseOut() {
      window.utils.hide(this);
      this.removeEventListener('mouseout', onProjectMouseOut);

    }
  }
})();
