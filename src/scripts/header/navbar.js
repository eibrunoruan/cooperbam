document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('button[aria-controls="navbar-multi-level"]');
    const navbar = document.getElementById('navbar-multi-level');
    const dropdownLinks = document.querySelectorAll('[data-dropdown-toggle]');
  
    menuButton.addEventListener('click', function () {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !expanded);
        navbar.classList.toggle('hidden');
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            const dropdownMenu = document.getElementById(dropdownId);
            dropdownMenu.classList.toggle('hidden');
        });
    });
});
