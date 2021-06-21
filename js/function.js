var Panels = (function() {

  var panelLeft = document.querySelector('.left-panel');
  var panelRight = document.querySelector('.right-panel');

  var openLeft = function() {
        panelLeft.classList.toggle('left-panel-active');
    panelRight.classList.toggle('right-panel-hidden');
  };

  var openRight = function() {
    panelRight.classList.toggle('right-panel-active');
    panelLeft.classList.toggle('left-panel-hidden');
  };

  var bindActions = function() {
    panelLeft.addEventListener('click', openLeft, false);
    panelRight.addEventListener('click', openRight, false);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Panels.init();