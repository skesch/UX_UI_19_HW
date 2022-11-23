const jQueryButt = document.getElementById('jquerybutton');
const gridContainter = document.getElementById('gridContainer');

  jQueryButt.addEventListener('click', function () {
  
    if (gridContainter.classList.contains('hidden')) {
      gridContainter.classList.remove('hidden');
      setTimeout(function () {
        gridContainter.classList.remove('visuallyhidden');
      }, 20);
    } else {
      gridContainter.classList.add('visuallyhidden');    
      gridContainter.addEventListener('transitionend', function(e) {
        gridContainter.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
    
  }, false);