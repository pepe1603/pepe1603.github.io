const container = document.querySelector('.container-main');
const heart = document.querySelector('.heart');

container.addEventListener('mouseover', () => {
    heart.style.animationDuration = '8s'; // Cambia la duración de la animación al pasar el cursor
});

container.addEventListener('mouseout', () => {
    heart.style.animationDuration = '10s'; // Restaura la duración de la animación cuando se quita el cursor
});
