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
  

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Construct the FormData object
        var formData = new FormData(form);

        // Send the form data using Fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Köszönjük! Az üzenetet sikeresen elküldtük.');
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Valami hiba történt és az üzenetet nem sikerült elküldeni.');
                    }
                });
            }
        }).catch(error => {
            alert('Valami hiba történt és az üzenetet nem sikerült elküldeni.');
        });
    });
});
