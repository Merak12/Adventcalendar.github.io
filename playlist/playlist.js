let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideContainer = document.querySelector('.slide');

let currentAudio = null; 

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slideContainer.appendChild(items[0]); 
    stopCurrentAudio(); 
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slideContainer.prepend(items[items.length - 1]); 
    stopCurrentAudio(); 
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'playButton' || event.target.closest('#playButton')) {
        let button = event.target.closest('#playButton'); 
        let audio = button.parentElement.querySelector('audio'); 

        if (audio) {
            if (audio === currentAudio) {
                if (audio.paused) {
                    audio.play();
                    button.innerHTML = '<i class="fa fa-pause"></i>';
                } else {
                    audio.pause();
                    button.innerHTML = '<i class="fa fa-play"></i>';
                }
            } else {
                stopCurrentAudio();
                currentAudio = audio;
                audio.play();
                button.innerHTML = '<i class="fa fa-pause"></i>';
            }
        }
    }
});

function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
        let currentButton = currentAudio.parentElement.querySelector('#playButton');
        if (currentButton) {
            currentButton.innerHTML = '<i class="fa fa-play"></i>';
        }
        currentAudio = null;
    }
}
