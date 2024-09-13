// Sélectionnez l'élément de l'image
const image = document.querySelector('animated-image');

// Définissez les dimensions de l'image
const imageWidth = image.offsetWidth;
const imageHeight = image.offsetHeight;

// Fonction pour déplacer l'image
function moveImage() {
  // Obtenez les positions actuelles de l'image
  let currentX = image.offsetLeft;
  let currentY = image.offsetTop;

  // Définissez la vitesse de déplacement
  const speedX = 2;
  const speedY = 2;

  // Déplacez l'image
  currentX += speedX;
  currentY += speedY;

  // Obtenez les dimensions de la fenêtre
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Empêchez l'image de sortir de l'écran à droite
  if (currentX + imageWidth > windowWidth) {
    currentX = windowWidth - imageWidth;
  }

  // Empêchez l'image de sortir de l'écran à gauche
  if (currentX < 0) {
    currentX = 0;
  }

  // Empêchez l'image de sortir de l'écran en bas
  if (currentY + imageHeight > windowHeight) {
    currentY = windowHeight - imageHeight;
  }

  // Empêchez l'image de sortir de l'écran en haut
  if (currentY < 0) {
    currentY = 0;
  }

  // Appliquez les nouvelles positions à l'image
  image.style.left = `${currentX}px`;
  image.style.top = `${currentY}px`;

  // Répétez l'animation
  requestAnimationFrame(moveImage);
}

// Démarrez l'animation
moveImage();

// Ajustez la taille de l'image lorsqu'on redimensionne la fenêtre
window.addEventListener('resize', () => {
  // Mettez à jour les dimensions de la fenêtre
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Assurez-vous que l'image reste dans les limites après un redimensionnement
  let currentX = image.offsetLeft;
  let currentY = image.offsetTop;

  if (currentX + imageWidth > windowWidth) {
    currentX = windowWidth - imageWidth;
  }

  if (currentY + imageHeight > windowHeight) {
    currentY = windowHeight - imageHeight;
  }

  image.style.left = `${currentX}px`;
  image.style.top = `${currentY}px`;
});
