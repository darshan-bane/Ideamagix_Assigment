// Select elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Toggle sidebar on hamburger click
hamburger.addEventListener('click', () => {
    sidebar.style.left = '0';
});

// Close sidebar on close button click
closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});



// ==================== Lazy load ======================
document.addEventListener("DOMContentLoaded", function () {
    const lazyImage = document.querySelector('.lazy-load');

    const loadImage = () => {
        if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom > 0) {
            lazyImage.src = lazyImage.getAttribute('data-src');
            lazyImage.classList.remove('lazy-load');
            window.removeEventListener('scroll', loadImage);
        }
    };

    window.addEventListener('scroll', loadImage);
    loadImage(); // Check if image is already in view on page load
});

// ================= accordian ===============
const acordians = document.querySelectorAll('.acordian')

acordians.forEach(acordian => {
    const icon = acordian.querySelector('.icon')
    const answer = acordian.querySelector('.answer')

    acordian.addEventListener('click', () => {
        icon.classList.toggle('active')
        answer.classList.toggle('active')
    })
})