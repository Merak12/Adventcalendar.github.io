document.addEventListener('DOMContentLoaded', () => {
    const dino = document.getElementById('dino');
    const cactus = document.getElementById('cactus');
    const finish = document.getElementById('finish');
    const messageContainer = document.getElementById('messageContainer');
    let isJumping = false;
    let dinoPosition = 50; // Initialize dinosaur's position

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
            messageContainer.classList.remove('hidden');
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
                finish.style.display = 'none';
                messageContainer.classList.remove('hidden');
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
                finish.style.display = 'none';
                messageContainer.classList.remove('hidden');
            }
        }, 50);
    }

    moveCactus();
    moveDino();
    setInterval(checkCollision, 10);
});