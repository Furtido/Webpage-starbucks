// ========== PRELOADER ==========
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2000);
});

// ========== CUSTOM CURSOR ==========
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (cursor && cursorFollower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    }
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .thumb li, .toggle');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor?.classList.add('hover');
        cursorFollower?.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor?.classList.remove('hover');
        cursorFollower?.classList.remove('hover');
    });
});

// ========== PRODUCT SLIDER (con transición suave) ==========
function imgSlider(newSrc) {
    const img = document.querySelector('.Starbucks');

    // Fade out
    img.classList.add('changing');

    // Wait, then change image and fade back in
    setTimeout(() => {
        img.src = newSrc;
        setTimeout(() => {
            img.classList.remove('changing');
        }, 50);
    }, 300);
}

function changeCircleColor(color) {
    document.querySelector('.circle').style.background = color;
}

// ========== MOBILE MENU TOGGLE ==========
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}