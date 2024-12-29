document.addEventListener('DOMContentLoaded', (event) => {
    const dispensedGumballContainer = document.getElementById('dispensedGumballContainer');
    const dispenseButton = document.getElementById('dispenseButton');
    const widgetContainer = document.getElementById('widgetContainer');
    const messageWidget = document.getElementById('messageWidget');
    let currentGumball = null;
    let currentMessageDisplayed = false;

    const messages = [
        "¡Eres increíble!",
        "¡Eres lo mejor de mi vida!",
        "¡Te amo demasiadoooo!",
        "¡Me encantas!",
        "¡Amo tu sonrisa!",
        "¡Eres mi luz!",
        "¡Te adorooo!",
        "¡Te extraño muchooo!",
        "¡Guapoooooooooo!",
        "¡Amo todo lo que eres!",
        "¡Que lindo es estar junto a ti!",
        "¡Nadie como tu!",
        "¡Te amo 24 horas por segundo!",
        "¡Te amo de aquí a la luna a pasitos de caracol!",
        "¡Me haces muy feliz!",
        "¡Eres mi persona favorita",
        "¡Eres mi pensamiento más bonito!",
        "¡Abrazo a la distanciaa!",
        "¡Que lindo eres!",
        "¡Mi chicleee!",
        "¡No te cansas de gustarme tanto!",
        "¡Por tu culpa me volvi cursi!",
        "¡Fan # 1 de tus ojitos!",
        "¡Mi más bonita casualidad!",
        "¡En tan poco te volviste tanto!",
        "¡Quédate un poco más, un para siempre!",
        "¡Yo te quiero para siempre y siempre es hoy!",
        "¡Gracias por ser tú!",
        "¡Si te vieras con mis ojos entenderías!",
        "¡Eres mi casita!",
        "¡Te miro y me brillan los ojos!",
        "¡Eres mi notificación favorita!",
        "¡Siempre para ti!",
        "¡Siempre vas a estar en mi corazón!",
        "¡Tarjeta amarilla por la falta que me hacesss!"
    ];

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    function dispenseGumball() {
        // Remove the previous gumball and message if they exist
        if (currentGumball) {
            dispensedGumballContainer.removeChild(currentGumball);
            widgetContainer.classList.add('hidden');
            currentMessageDisplayed = false;
            messageWidget.textContent = ''; // Clear the previous message
        }

        // Create a new gumball with a random color
        const gumball = document.createElement('div');
        gumball.className = 'gumball';
        gumball.style.backgroundColor = getRandomColor();
        
        // Add a click event to the gumball to show a random message
        gumball.addEventListener('click', () => {
            if (!currentMessageDisplayed) {
                const message = getRandomMessage();
                messageWidget.textContent = message;
                widgetContainer.classList.remove('hidden');
                currentMessageDisplayed = true;
            }
        });

        // Add the new gumball to the container
        dispensedGumballContainer.appendChild(gumball);
        currentGumball = gumball;
    }

    dispenseButton.addEventListener('click', dispenseGumball);
});