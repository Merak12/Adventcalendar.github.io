let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideContainer = document.querySelector('.slide');

let currentAudio = null; // Variable para guardar el audio actual

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slideContainer.appendChild(items[0]); // Mueve el primer elemento al final
    stopCurrentAudio(); // Detener audio actual al cambiar de slide
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slideContainer.prepend(items[items.length - 1]); // Mueve el último elemento al inicio
    stopCurrentAudio(); // Detener audio actual al cambiar de slide
});

// Agregar un listener dinámico para los botones de play
document.addEventListener('click', function(event) {
    if (event.target.id === 'playButton' || event.target.closest('#playButton')) {
        let button = event.target.closest('#playButton'); // Obtener el botón
        let audio = button.parentElement.querySelector('audio'); // Buscar el audio en el mismo slide

        if (audio) {
            if (audio === currentAudio) {
                // Si el audio actual es el mismo, alternar play/pausa
                if (audio.paused) {
                    audio.play();
                    button.innerHTML = '<i class="fa fa-pause"></i>';
                } else {
                    audio.pause();
                    button.innerHTML = '<i class="fa fa-play"></i>';
                }
            } else {
                // Si se selecciona otro audio, detener el anterior
                stopCurrentAudio();
                currentAudio = audio;
                audio.play();
                button.innerHTML = '<i class="fa fa-pause"></i>';
            }
        }
    }
});

// Función para detener el audio actual
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reiniciar el tiempo del audio
        let currentButton = currentAudio.parentElement.querySelector('#playButton');
        if (currentButton) {
            currentButton.innerHTML = '<i class="fa fa-play"></i>';
        }
        currentAudio = null;
    }
}
