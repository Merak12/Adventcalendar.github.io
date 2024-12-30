const container = document.querySelector('.container');

// Crear el modal para la contraseña
const passwordModal = document.createElement('div');
passwordModal.className = 'password-modal';
passwordModal.innerHTML = `
    <div class="password-modal-content">
        <h2>Introduce la contraseña</h2>
        <input type="password" id="passwordInput" maxlength="10" placeholder="Contraseña de 10 dígitos">
        <button id="submitPassword">Enviar</button>
    </div>
`;
document.body.appendChild(passwordModal);

const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');

// Función para cerrar el modal
function closeModal() {
    passwordModal.style.display = 'none';
    passwordInput.value = '';
}

// Manejar clic fuera del contenido del modal para cerrar el modal
passwordModal.addEventListener('click', (e) => {
    if (e.target === passwordModal) {
        closeModal();
    }
});

for (let i = 1; i <= 12; i++) {
    const day = document.createElement('div');
    day.className = 'day';
    day.innerHTML = `${i}`;

    day.addEventListener('click', function() {
        if (i === 1) {
            window.location.href = 'trol/trol.html'; 
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
            window.location.href = 'ochio/ochio.html'; 
        } else if (i === 9) {
            window.location.href = 'lil/lil.html';
        } else if (i === 10) {
            window.location.href = 'room/room.html'; 
        } else if (i === 11) {
            window.location.href = 'bubble/bubble.html'; 
        } else if (i === 12) {
            // Mostrar el modal de la contraseña
            passwordModal.style.display = 'flex';
            
            // Manejar el envío de la contraseña
            submitPassword.addEventListener('click', function() {
                const password = passwordInput.value;
                if (password === '1647535136') { // Cambia esto por la contraseña deseada
                    window.location.href = 'final/final.html'; 
                } else {
                    alert('Contraseña incorrecta. Inténtalo de nuevo.');
                    passwordInput.value = '';
                }
            });
        }
    });

    container.appendChild(day);
}