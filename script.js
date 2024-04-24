const image = document.querySelector('img'); // Seleciona a imagem

image.addEventListener('touchstart', function() {
    // Aumenta a imagem em 10% ao tocar
    image.style.transform = 'scale(1.1)';
});

image.addEventListener('touchend', function() {
    // Retorna a imagem ao tamanho original ao soltar o toque
    image.style.transform = 'scale(1)';
});
