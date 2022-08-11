// Constants
const toggles = document.querySelectorAll('.js-toggle');
const submenus = document.querySelectorAll('.js-toggle ul.menu');

// Toggle Dropdowns
toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        // If the clicked item already is open then close it and rotate svg back
        if (toggle.querySelector('ul.menu').classList.contains('grid')) {
            toggle.querySelector('ul.menu').classList.remove('grid');
            toggle.querySelector('ul.menu').classList.add('hidden')
            toggle.querySelector('svg').classList.remove('rotate-180')
        } else {
            // Close all submenus forst before opening the cliked one.
            toggles.forEach(element => {
                element.querySelector('ul.menu').classList.remove('grid');
                element.querySelector('ul.menu').classList.add('hidden');
                element.querySelector('svg').classList.remove('rotate-180');
            });
            // Open submenu
            toggle.querySelector('ul.menu').classList.remove('hidden');
            toggle.querySelector('ul.menu').classList.add('grid');
            toggle.querySelector('svg').classList.add('rotate-180')
        }
    });
});

// Toggle nav on mobile
const openBtn = document.querySelector('[data-toggle="open"]');
const closeBtn = document.querySelector('[data-toggle="close"]');
const mobileNav = document.querySelector('[data-nav]');
const overlay = document.querySelector('[data-overlay]');

openBtn.addEventListener('click', function () {
    mobileNav.classList.remove('hidden');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('flex');
    overlay.classList.remove('hidden');
});
closeBtn.addEventListener('click', function () {
    mobileNav.classList.add('hidden');
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    overlay.classList.add('hidden');
});