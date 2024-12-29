const levels = [
    { 
        correct: 2, 
        images: ["imgG/imp1.jpg", "imgG/imp12.jpg", "imgG/imp1B.jpg", "imgG/imp13.jpg"],
        message: "¡Claroooo! Es el único perfecto... Como Tú <3" 
    },
    { 
        correct: 1, 
        images: ["imgG/past2.jpg", "imgG/past2B.jpg", "imgG/past23.jpg", "imgG/past21.jpg"],
        message: "¡Esoooo! por que como tú... es el único que ilumina mi vida, obvioooo pues que pensabasss" 
    },
    { 
        correct: 3, 
        images: ["imgG/dulce111.jpg", "imgG/dulce12.jpg", "imgG/dulce11.jpg", "imgG/dulce1.jpg"],
        message: "¡MMMMM esooo Increíble y dulce como tú!" 
    },
    { 
        correct: 0, 
        images: ["imgG/pop.jpg", "imgG/pop11.jpg", "imgG/pop4.jpg", "imgG/pop3.jpg"],
        message: "Exactooo, es el único, ¡por que eres el único que quiero en mi vida!" 
    },
    { 
        correct: 2, 
        images: ["imgG/hela1.jpg", "imgG/hela11.jpg", "imgG/helaa.jpg", "imgG/helai.jpg"],
        message: "¡AAAAAAA! Esoo es el único postre que se derreti como yo cuando te veooo :)" 
    },
    { 
        correct: 1, 
        images: ["imgG/choco1.jpg", "imgG/choco.jpg", "imgG/choco2.jpg", "imgG/choco3.jpg"],
        message: "¡Siiiii! como los m&m's le das color a mis días :)" 
    }
];

let currentLevel = 0;

function loadLevel(level) {
    const buttonContainer = document.getElementById("button-container");
    const resultContainer = document.getElementById("result-container");

    buttonContainer.innerHTML = ""; 
    resultContainer.style.display = "none"; 
    resultContainer.innerHTML = ""; 

    levels[level].images.forEach((image, index) => {
        const button = document.createElement("button");
        const img = document.createElement("img");
        img.src = image;
        button.appendChild(img);
        button.style.padding = "5px 10px"; 
        button.addEventListener("click", () => handleButtonClick(index));
        buttonContainer.appendChild(button);
    });
}

function handleButtonClick(index) {
    const buttonContainer = document.getElementById("button-container");
    const resultContainer = document.getElementById("result-container");

    if (index === levels[currentLevel].correct) {
        buttonContainer.innerHTML = ""; 

        const correctImage = document.createElement("img");
        correctImage.src = levels[currentLevel].images[index];
        correctImage.style.width = "200px"; 
        correctImage.style.height = "auto"; 
        resultContainer.appendChild(correctImage);

        const message = levels[currentLevel].message; 
        const correctLabel = document.createElement("label");
        correctLabel.textContent = message; 
        correctLabel.style.fontSize = "20px"; 
        correctLabel.style.fontWeight = "bold"; 
        resultContainer.appendChild(correctLabel);

        let continueButton = resultContainer.querySelector("button");
        if (!continueButton) {
            continueButton = document.createElement("button");
            continueButton.textContent = "Continuar";
            continueButton.style.padding = "3px 8px"; 
            continueButton.style.width = "100px"; 
            continueButton.style.height = "40px"; 
            continueButton.style.fontSize = "12px"; 
            continueButton.addEventListener("click", () => {
                currentLevel++;
                if (currentLevel < levels.length) {
                    loadLevel(currentLevel);
                } else {
                    endGame();
                }
            });
            resultContainer.appendChild(continueButton);
        }

        resultContainer.style.display = "flex"; 
        resultContainer.style.flexDirection = "column"; 
        resultContainer.style.alignItems = "center"; 
        resultContainer.style.justifyContent = "center";
        resultContainer.style.gap = "20px"; 

    } else {
        alert("Incorrecto, intenta de nuevo.");
        restartGame(); 
    }
}

function restartGame() {
    currentLevel = 0;  
    loadLevel(currentLevel);
}

function endGame() {
    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = "";

    const finalMessage = document.createElement("p");
    finalMessage.textContent = "¡Has completado todos los niveles! Así que la pista es... 7";
    resultContainer.appendChild(finalMessage);

    const gifContainer = document.createElement("div");
    gifContainer.innerHTML = "<h3>¡Te quiero muchoooooooo!</h3><img src='imgG/osito.gif' alt='Congratulations'>";
    resultContainer.appendChild(gifContainer);

    resultContainer.style.display = "block"; 
}

loadLevel(currentLevel);
