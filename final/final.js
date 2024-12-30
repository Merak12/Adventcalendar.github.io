document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    class Particle {
        constructor(x, y, hue, size) {
            this.x = x;
            this.y = y;
            this.angle = random(0, Math.PI * 2);
            this.speed = random(2, 6);
            this.friction = 0.95;
            this.gravity = 1;
            this.hue = hue;
            this.brightness = random(50, 80);
            this.alpha = 1;
            this.decay = random(0.015, 0.03);
            this.size = size * 0.5;
        }

        update() {
            this.speed *= this.friction;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed + this.gravity;
            this.alpha -= this.decay;
            return this.alpha <= this.decay;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
            ctx.fill();
        }
    }

    function animate() {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';

        particles.forEach((particle, index) => {
            if (particle.update()) {
                particles.splice(index, 1);
            } else {
                particle.draw();
            }
        });

        requestAnimationFrame(animate);
    }

    const duration = 20000;
    const startTime = Date.now();

    function generateFireworks() {
        if (Date.now() - startTime < duration) {
            const x = random(0, canvas.width);
            const y = random(0, canvas.height / 2);
            const hue = random(0, 360);
            const size = random(6, 10);

            const particleCount = 150;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(x, y, hue, size));
            }

            setTimeout(generateFireworks, random(200, 500));
        }
    }

    animate();
    generateFireworks();

    const heart = document.getElementById('heart');
    const loveLetterContainer = document.getElementById('loveLetterContainer');

    heart.addEventListener('click', () => {
        loveLetterContainer.style.opacity = '1';
        loveLetterContainer.style.visibility = 'visible';
    });

    loveLetterContainer.addEventListener('click', () => {
        loveLetterContainer.style.opacity = '0';
        loveLetterContainer.style.visibility = 'hidden';
    });
});