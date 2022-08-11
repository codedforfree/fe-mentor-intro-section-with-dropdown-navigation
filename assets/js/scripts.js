import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

// Constants
const toggles = document.querySelectorAll('.js-toggle');
const menu = document.querySelector('.js-menu');
const toggle = document.querySelector('.js-toggle-nav');
const overlay = document.querySelector('.overlay');

// Toggle navigation submenu
toggles.forEach(toggle => {
    toggle.querySelector('ul').classList.add('hidden');
    toggle.querySelector('svg').classList.add('rotate-0');
    toggle.addEventListener('click', function () {
        this.querySelector('ul').classList.toggle('hidden');
        this.querySelector('svg').classList.toggle('rotate-180');
    })
});

// Toggle mobile navigation
toggle.addEventListener('click', function () {
    overlay.classList.toggle('has-overlay');
    menu.classList.toggle('hidden');
});


