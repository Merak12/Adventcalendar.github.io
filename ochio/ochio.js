const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const container = document.querySelector('.container');
const icon = document.querySelector('.wrapper i'); // Selección del ícono <i>

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'OBVII TE AMO MÁS💗';

    // Reemplaza el ícono <i> por un GIF
    const gif = document.createElement('img');
    gif.src = 'gifsito.gif'; // Cambia esta ruta al GIF que desees
    gif.alt = 'Celebration GIF';
    gif.style.width = '150px'; // Ajusta el tamaño del GIF
    gif.style.height = '150px';
    gif.style.marginTop = '10px';

    icon.replaceWith(gif); // Reemplaza el ícono con el GIF

    // Inicia la animación de corazones
    const intervalId = setInterval(hearts, 100);

    // Detener animación después de 5 segundos (opcional)
    setTimeout(() => clearInterval(intervalId), 5000);
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

function hearts() {
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = '❤️';

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 + 2 + 's';

    container.appendChild(creat);

    // Remover corazones después de la animación para evitar acumulación en el DOM
    setTimeout(() => {
        creat.remove();
    }, 5000); // Duración de la animación + un pequeño margen
}
