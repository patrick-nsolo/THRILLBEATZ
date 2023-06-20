const image = document.querySelector('img');
const interval = setInterval(function() {
  var width = image.width;
  image.width = width * 1.1;
  image.height = width * 1.1;
}, 6000);

const beats = document.querySelector('beats');
const headphones = document.querySelector('.headphones');

let rotationSpeed = 0;

function updateRotation() {
  headphones.style.transform = `translate(-50%, -50%) rotate(${rotationSpeed}deg)`;
}

swag.addEventListener('click', () => {
  if (rotationSpeed === 0) {
    rotationSpeed = 10;
    headphones.classList.add('speed-up');
    headphones.classList.remove('slow-down');
  } else {
    rotationSpeed = 0;
    headphones.classList.remove('speed-up');
    headphones.classList.remove('slow-down');
  }
  updateRotation();
});

headphones.addEventListener('click', (event) => {
  event.stopPropagation();
  if (rotationSpeed === 0) {
    rotationSpeed = -5;
    headphones.classList.remove('speed-up');
    headphones.classList.add('slow-down');
  } else {
    rotationSpeed = 0;
    headphones.classList.remove('speed-up');
    headphones.classList.remove('slow-down');
  }
  updateRotation();
});

updateRotation();


























