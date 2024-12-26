
function createBubble(event) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const aquarium = document.querySelector('.aquarium');
    const aquariumRect = aquarium.getBoundingClientRect();

    const x = event.clientX - aquariumRect.left; 
    const y = event.clientY - aquariumRect.top;  

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    aquarium.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 1000)
}


document.querySelector('.aquarium').addEventListener('mousemove', createBubble);

const colorSwitch = document.getElementById('colorSwitch');

colorSwitch.addEventListener('change', () => {
    const aquarium = document.querySelector('.aquarium');
    
    if (colorSwitch.checked) {
        aquarium.classList.add('neon'); 
    } else {
        aquarium.classList.remove('neon'); 
    }
});

function moveJuanxito() {
    const juanxito = document.querySelector('.juanxito');
    const aquariumWidth = document.querySelector('.aquarium').clientWidth;
    const aquariumHeight = document.querySelector('.aquarium').clientHeight;

    
    let position = -70; 
    let speed = 2; 
    let lastY = 0; 

    function resetJuanxito() {
        let randomY;
        do {
            randomY = Math.random() * (aquariumHeight - 40) + 20; 
        } while (Math.abs(randomY - lastY) < 50); 

        juanxito.style.top = `${randomY}px`; 
        lastY = randomY; 

        speed = Math.random() * 4 + 1; 

        position = 0; 
        juanxito.style.left = `${position}px`; 

        moveToRight();
    }

    function moveToRight() {
        const entranceInterval = setInterval(() => {
            position += speed; 
            juanxito.style.left = `${position}px`;

            if (position > aquariumWidth) {
                clearInterval(entranceInterval); 
                setTimeout(resetJuanxito, 10000); 
            }
        }, 20); 
    }

    resetJuanxito();
}

moveJuanxito();

function moveNemo() {
    const nemos = document.querySelectorAll('.nemo'); 
    const aquariumWidth = document.querySelector('.aquarium').clientWidth;
    const aquariumHeight = document.querySelector('.aquarium').clientHeight;

    nemos.forEach(nemo => {
        let position = -70; 
        let speed = 2; 
        let lastY = 0; 

        function resetNemo() {
            let randomY;
            do {
                randomY = Math.random() * (aquariumHeight - 40) + 20; 
            } while (Math.abs(randomY - lastY) < 50); 

            nemo.style.top = `${randomY}px`; 
            lastY = randomY; 

            speed = Math.random() * 4 + 2; 

            position = 0; 
            nemo.style.left = `${position}px`; 

            moveToRight();
        }

        function moveToRight() {
            const entranceInterval = setInterval(() => {
                position += speed; 
                nemo.style.left = `${position}px`;

                if (position > aquariumWidth) {
                    clearInterval(entranceInterval); 
                    setTimeout(resetNemo, 10000); 
                }
            }, 20); 
        }

        resetNemo();
    });
}

moveNemo();