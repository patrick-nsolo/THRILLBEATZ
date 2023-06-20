const image = document.querySelector('img');
const interval = setInterval(function() {
  var width = image.width;
  image.width = width * 1.1;
  image.height = width * 1.1;
}, 6000);




























const glowElements = document.querySelectorAll('.glow');

glowElements.forEach((element) => {
  element.addEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event) {
  const glowElement = event.target;
  const glowWidth = glowElement.offsetWidth;
  const glowPosition = event.offsetX;
  const glowPercentage = (glowPosition / glowWidth) * 100;
  glowElement.style.setProperty('--glow-progress', `${glowPercentage}%`);
}

















function onHover(element) {
    element.querySelector('span').classList.add('active');
  }
  function onLeave(element) {
    element.querySelector('span').classList.remove('active');
  }
  document.querySelectorAll('nav li a').forEach(function(element) {
    element.addEventListener('mouseover', onHover);
    element.addEventListener('mouseout', onLeave);
  });



var images = document.querySelectorAll('img');
var activeImage = images[0];
setInterval(function() {
    activeImage.classList.remove('active');
    activeImage = images[images.indexOf(activeImage) + 1];
    activeImage.classList.add('active');
  }, 10000);