// keyntoes
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


// background 
var backgroundImageIndex = 0;
var backgroundImages = ['background2.jpg', 'background3.jpg', 'background4.jpg'];

function toggleBackground() {
    backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
    var newImage = backgroundImages[backgroundImageIndex];
    document.documentElement.style.backgroundImage = `url('././public/${newImage}')`;
}