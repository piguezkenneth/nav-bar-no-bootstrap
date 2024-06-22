// Select elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Toggle navigation menu
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    
    // Toggle aria-expanded attribute for accessibility
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
});

// Toggle dropdown menus on hover
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('mouseenter', () => {
        toggle.nextElementSibling.classList.add('show');
    });
    
    toggle.addEventListener('mouseleave', () => {
        toggle.nextElementSibling.classList.remove('show');
    });
});

// Show/hide clear button based on search input value
searchInput.addEventListener('input', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
});

// Clear search input and hide clear button
searchInput.addEventListener('focus', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
});

searchInput.addEventListener('blur', () => {
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = 'none';
});

document.querySelector('.clear-btn').addEventListener('click', () => {
    searchInput.value = '';
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.style.display = 'none';
});
