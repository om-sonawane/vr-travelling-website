// Select burger icon and navbar elements
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

// Toggle 'active' class on navbar when burger is clicked
burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
