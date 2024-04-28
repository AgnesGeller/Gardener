AOS.init();
document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarMenu = document.querySelector('#navbarNav');
  
    navbarMenu.addEventListener('click', function(event) {
      if (event.target.classList.contains('nav-link')) {
        if (navbarToggler.offsetParent !== null) {
          event.stopPropagation(); // Stop the event from bubbling up
          navbarToggler.click();
        }
      }
    });
  });
  