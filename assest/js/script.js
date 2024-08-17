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











