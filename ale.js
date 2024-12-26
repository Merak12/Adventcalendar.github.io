
const container = document.querySelector('.container');

for (let i = 1; i <= 12; i++) {
    const day = document.createElement('div');
    day.className = 'day';
    day.innerHTML = `${i}`;

    day.addEventListener('click', function() {
        if (i === 1) {

            // Mostrar el widget de video
            const videoWidget = document.getElementById('video-widget');
            videoWidget.style.display = 'block';  // Hacer visible el widget

            this.classList.toggle('opened');
        } else if (i === 2) {
            window.location.href = 'acua/acuario.html'; 
        } else if (i === 3) {
            window.location.href = 'tree/treee.html'; 
        } else if (i === 4) {
            window.location.href = 'flower/flower.html'; 
        } else if (i === 5) {
            window.location.href = 'game/game.html'; 
        } else if (i === 6) {
            window.location.href = 'playlist/playlist.html'; 
        } else if (i === 7) {
            window.location.href = 'card/card.html'; 
        } else if (i === 8) {
            window.location.href = 'ruta/del/archivo/dia8.html'; 
        } else if (i === 9) {
            window.location.href = 'ruta/del/archivo/dia9.html';
        } else if (i === 10) {
            window.location.href = 'room/room.html'; 
        } else if (i === 11) {
            window.location.href = 'ruta/del/archivo/dia11.html'; 
        } else if (i === 12) {
            window.location.href = 'ruta/del/archivo/dia12.html'; 
        }
    });

    container.appendChild(day);
}

const closeButton = document.getElementById('close-video');
closeButton.addEventListener('click', function() {
    const videoWidget = document.getElementById('video-widget');
    videoWidget.style.display = 'none';  
});
    