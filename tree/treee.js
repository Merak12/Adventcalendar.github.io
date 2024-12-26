function run() {
    const body = document.body;

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 10000);
    }

    function generateStars() {
        for (let i = 0; i < 150; i++) {
            createStar();
        }
    }

    generateStars();

    setInterval(() => {
        createStar();
    }, 200);
}

document.addEventListener("DOMContentLoaded", run);
