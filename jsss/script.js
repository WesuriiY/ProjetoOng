document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("toggle-menu");
    const sidebar = document.querySelector("aside");

    botao.addEventListener("click", function() {
        sidebar.classList.toggle("fechado");
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
