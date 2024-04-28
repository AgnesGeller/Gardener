document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init();

    // Navbar elements
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarMenu = document.querySelector('#navbarNav');
    var submenus = document.querySelectorAll('.dropdown-submenu');

    // Toggle submenus on click
    navbarMenu.addEventListener('click', function(event) {
        var submenuTrigger = event.target.closest('.dropdown-submenu .dropdown-toggle');
        if (submenuTrigger) {
            event.preventDefault();
            var submenu = submenuTrigger.nextElementSibling;
            submenu.classList.toggle('show');
        }
    });

    // Close the navbar when a nav-link is clicked on mobile
    navbarMenu.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link')) {
            if (navbarToggler.offsetParent !== null) {
                navbarToggler.click();
            }
        }
    });

    // Close all submenus when toggler is clicked
    navbarToggler.addEventListener('click', function() {
        submenus.forEach(function(submenu) {
            if (submenu.classList.contains('show')) {
                submenu.classList.remove('show');
            }
        });
    });

    // Close submenus when clicking outside on mobile
    document.addEventListener('touchstart', function(event) {
        if (!navbarMenu.contains(event.target)) {
            submenus.forEach(function(submenu) {
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                }
            });
        }
    });

    // Form submission
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(form);
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
