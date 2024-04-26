window.onload = function() {
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    var images = document.querySelectorAll('.servico img');

    if (isTouchDevice) {
        images.forEach(function(img) {
            img.addEventListener('click', function() {
                this.style.transform = 'scale(1.2)';
            });
        });
    }
}