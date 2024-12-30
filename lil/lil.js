document.addEventListener('DOMContentLoaded', () => {
    const dino = document.getElementById('dino');
    const cactus = document.getElementById('cactus');
    const finish = document.getElementById('finish');
    const gameContainer = document.querySelector('.game-container');
    let isJumping = false;
    let dinoPosition = 50; // Initialize dinosaur's position

    // Create the audio element once
    const audio = new Audio('cringe.mp3');

    // List of GIFs
    const gifs = [
        'ganaste.gif',
        'ganaste2.gif',
        'ganaste3.gif',
        'ganaste4.gif',
        'ganaste5.gif',
    ];

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && !isJumping) {
            jump();
        }
    });

    function jump() {
        isJumping = true;
        let position = 0;
        let upInterval = setInterval(() => {
            if (position >= 150) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }, 20);
            }
            position += 20;
            dino.style.bottom = position + 'px';
        }, 20);
    }

    function checkCollision() {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();
        const finishRect = finish.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            alert('Game Over!');
            location.reload();
        }

        if (
            dinoRect.right > finishRect.left &&
            dinoRect.left < finishRect.right &&
            dinoRect.bottom > finishRect.top &&
            finishRect.right <= window.innerWidth
        ) {
            finish.style.animationPlayState = 'paused';
            showWinningMessage();
        }
    }

    function moveCactus() {
        let cactusInterval = setInterval(() => {
            const cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));
            if (cactusRight >= 800) {
                cactus.style.right = '0px';
            } else {
                cactus.style.right = cactusRight + 10 + 'px';
            }
        }, 50);

        setTimeout(() => {
            clearInterval(cactusInterval);
            cactus.style.display = 'none';
            finish.style.display = 'block';
            moveFinish();
        }, 8000); // Move cactus for 8 seconds before showing finish line
    }

    function moveFinish() {
        let finishInterval = setInterval(() => {
            const finishRight = parseInt(window.getComputedStyle(finish).getPropertyValue("right"));
            if (finishRight >= 800) {
                clearInterval(finishInterval);
                showWinningMessage();
            } else {
                finish.style.right = finishRight + 10 + 'px';
            }
        }, 50);
    }

    function moveDino() {
        let dinoInterval = setInterval(() => {
            dinoPosition += 2; // Move dino forward
            dino.style.left = dinoPosition + 'px';

            // Check if dino reaches the end
            if (dinoPosition >= 700) {
                clearInterval(dinoInterval);
                showWinningMessage();
            }
        }, 50);
    }

    function showWinningMessage() {
        // Hide game elements
        gameContainer.style.display = 'none';

        // Create the message container
        const messageContainer = document.createElement('div');
        messageContainer.id = 'messageContainer';
        messageContainer.classList.remove('hidden');

        // Create the message
        const message = document.createElement('p');
        message.id = 'message';
        message.textContent = '¡Yaaaay Lo lograste!';

        // Create the GIF
        const gif = document.createElement('img');
        gif.id = 'gif';
        gif.src = gifs[0];
        gif.alt = 'Celebration GIF';

        // Create the button
        const cringeButton = document.createElement('button');
        cringeButton.id = 'cringeButton';
        cringeButton.textContent = 'Cringe';

        // Add event listener to play/stop audio when button is clicked
        cringeButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });

        // Append message, GIF, and button to the message container
        messageContainer.appendChild(message);
        messageContainer.appendChild(gif);
        messageContainer.appendChild(cringeButton);

        // Append message container to the body
        document.body.appendChild(messageContainer);

        // Change the GIF every 10 seconds
        let gifIndex = 1;
        setInterval(() => {
            gif.src = gifs[gifIndex];
            gifIndex = (gifIndex + 1) % gifs.length;
        }, 10000);
    }

    moveCactus();
    moveDino();
    setInterval(checkCollision, 5);
});