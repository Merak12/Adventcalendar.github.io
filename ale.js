
const container = document.querySelector('.container');

for (let i = 1; i <= 12; i++) {
    const day = document.createElement('div');
    day.className = 'day';
    day.innerHTML = `${i}`;

    // Lógica para redirigir al hacer clic en el día correspondiente
    day.addEventListener('click', function() {
        if (i === 1) {
            // Mostrar el widget de video
            const videoWidget = document.getElementById('video-widget');
            videoWidget.style.display = 'block';  // Hacer visible el widget

            // También puedes agregar un efecto visual al hacer clic en el día 1
            this.classList.toggle('opened');
        } else if (i === 2) {
            window.location.href = 'acua/acuario.html'; // Día 2
        } else if (i === 3) {
            window.location.href = 'tree/treee.html'; // Día 3
        } else if (i === 4) {
            window.location.href = 'flower/flower.html'; // Día 4
        } else if (i === 5) {
            window.location.href = 'ruta/del/archivo/dia5.html'; // Día 5
        } else if (i === 6) {
            window.location.href = 'playlist/playlist.html'; // Día 6
        } else if (i === 7) {
            window.location.href = 'ruta/del/archivo/dia7.html'; // Día 7
        } else if (i === 8) {
            window.location.href = 'ruta/del/archivo/dia8.html'; // Día 8
        } else if (i === 9) {
            window.location.href = 'ruta/del/archivo/dia9.html'; // Día 9
        } else if (i === 10) {
            window.location.href = 'room/room.html'; // Día 10
        } else if (i === 11) {
            window.location.href = 'ruta/del/archivo/dia11.html'; // Día 11
        } else if (i === 12) {
            window.location.href = 'ruta/del/archivo/dia12.html'; // Día 12
        }
    });

    container.appendChild(day);
}

// Lógica para cerrar el widget de video
const closeButton = document.getElementById('close-video');
closeButton.addEventListener('click', function() {
    const videoWidget = document.getElementById('video-widget');
    videoWidget.style.display = 'none';  // Ocultar el widget
});
    