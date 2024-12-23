// acuario.js

function createBubble(event) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Obtener el contenedor del acuario
    const aquarium = document.querySelector('.aquarium');
    const aquariumRect = aquarium.getBoundingClientRect();

    // Establecer la posición de la burbuja relativa al acuario
    const x = event.clientX - aquariumRect.left; // Ajustar la posición X
    const y = event.clientY - aquariumRect.top;  // Ajustar la posición Y

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Añadir la burbuja al acuario
    aquarium.appendChild(bubble);

    // Eliminar la burbuja después de la animación
    setTimeout(() => {
        bubble.remove();
    }, 1000); // Tiempo de duración de la animación
}


// Añadir el evento de movimiento del mouse sobre el acuario
document.querySelector('.aquarium').addEventListener('mousemove', createBubble);

// Lógica para el botón de cambio de color
const colorSwitch = document.getElementById('colorSwitch');

colorSwitch.addEventListener('change', () => {
    const aquarium = document.querySelector('.aquarium');
    
    if (colorSwitch.checked) {
        aquarium.classList.add('neon'); // Agrega la clase neón
    } else {
        aquarium.classList.remove('neon'); // Quita la clase neón
    }
});
// acuario.js

// Función para mover el pez juanxito
function moveJuanxito() {
    const juanxito = document.querySelector('.juanxito');
    const aquariumWidth = document.querySelector('.aquarium').clientWidth;
    const aquariumHeight = document.querySelector('.aquarium').clientHeight;

    // Inicializa la posición en la parte izquierda de la pantalla
    let position = -70; // Comienza fuera de la pantalla
    let speed = 2; // Velocidad inicial de movimiento
    let lastY = 0; // Para almacenar la última posición Y

    // Función para reiniciar el pez
    function resetJuanxito() {
        // Genera una nueva posición Y aleatoria, asegurando que no sea demasiado cercana a la anterior
        let randomY;
        do {
            randomY = Math.random() * (aquariumHeight - 40) + 20; // Ajusta el rango según el tamaño del pez
        } while (Math.abs(randomY - lastY) < 50); // Asegúrate de que la nueva posición Y sea al menos 50px diferente

        juanxito.style.top = `${randomY}px`; // Establece la nueva posición Y
        lastY = randomY; // Actualiza la última posición Y

        // Cambia la velocidad aleatoriamente entre 1 y 5
        speed = Math.random() * 4 + 1; // Velocidad entre 1 y 5

        // Reinicia la posición a la izquierda
        position = 0; // Comienza desde la posición 0
        juanxito.style.left = `${position}px`; // Establece la posición inicial

        // Mueve el pez hacia la derecha
        moveToRight();
    }

    // Función para mover el pez hacia la derecha
    function moveToRight() {
        const entranceInterval = setInterval(() => {
            position += speed; // Aumenta la posición
            juanxito.style.left = `${position}px`;

            // Si el pez se mueve fuera de la pantalla a la derecha, reinicia su posición
            if (position > aquariumWidth) {
                clearInterval(entranceInterval); // Detiene el movimiento de entrada
                // Espera 10 segundos antes de reiniciar
                setTimeout(resetJuanxito, 10000); // Espera 10 segundos antes de reaparecer
            }
        }, 20); // Ajusta el intervalo para controlar la velocidad
    }

    // Inicia el movimiento
    resetJuanxito();
}

// Llama a la función para iniciar el movimiento
moveJuanxito();

function moveNemo() {
    const nemos = document.querySelectorAll('.nemo'); // Select all Nemo elements
    const aquariumWidth = document.querySelector('.aquarium').clientWidth;
    const aquariumHeight = document.querySelector('.aquarium').clientHeight;

    nemos.forEach(nemo => {
        // Inicializa la posición en la parte izquierda de la pantalla
        let position = -70; // Comienza fuera de la pantalla
        let speed = 2; // Velocidad inicial de movimiento
        let lastY = 0; // Para almacenar la última posición Y

        // Función para reiniciar el pez
        function resetNemo() {
            // Genera una nueva posición Y aleatoria, asegurando que no sea demasiado cercana a la anterior
            let randomY;
            do {
                randomY = Math.random() * (aquariumHeight - 40) + 20; // Ajusta el rango según el tamaño del pez
            } while (Math.abs(randomY - lastY) < 50); // Asegúrate de que la nueva posición Y sea al menos 50px diferente

            nemo.style.top = `${randomY}px`; // Establece la nueva posición Y
            lastY = randomY; // Actualiza la última posición Y

            // Cambia la velocidad aleatoriamente entre 1 y 5
            speed = Math.random() * 4 + 2; // Velocidad entre 1 y 5

            // Reinicia la posición a la izquierda
            position = 0; // Comienza desde la posición 0
            nemo.style.left = `${position}px`; // Establece la posición inicial

            // Mueve el pez hacia la derecha
            moveToRight();
        }

        // Función para mover el pez hacia la derecha
        function moveToRight() {
            const entranceInterval = setInterval(() => {
                position += speed; // Aumenta la posición
                nemo.style.left = `${position}px`;

                // Si el pez se mueve fuera de la pantalla a la derecha, reinicia su posición
                if (position > aquariumWidth) {
                    clearInterval(entranceInterval); // Detiene el movimiento de entrada
                    // Espera 10 segundos antes de reiniciar
                    setTimeout(resetNemo, 10000); // Espera 10 segundos antes de reaparecer
                }
            }, 20); // Ajusta el intervalo para controlar la velocidad
        }

        // Inicia el movimiento
        resetNemo();
    });
}

// Llama a la función para iniciar el movimiento
moveNemo();