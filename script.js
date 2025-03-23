// Animal spots and their positions (customize as needed)
const animalSpots = [
  { id: 'spot1', top: '20%', left: '30%', animal: 'deer.png' },
  { id: 'spot2', top: '50%', left: '10%', animal: 'fox.png' },
  { id: 'spot3', top: '70%', left: '60%', animal: 'rabbit.png' },
  { id: 'spot4', top: '40%', left: '80%', animal: 'owl.png' },
  { id: 'spot5', top: '10%', left: '50%', animal: 'bear.png' },
];

let points = 0;
let hoverTimer = null;

// Initialize animal spots
function initializeAnimalSpots() {
  animalSpots.forEach(spot => {
    const element = document.getElementById(spot.id);
    element.style.top = spot.top;
    element.style.left = spot.left;

    element.addEventListener('mouseenter', () => handleMouseEnter(spot));
    element.addEventListener('mouseleave', handleMouseLeave);
  });
}

// Handle mouse enter (start timer)
function handleMouseEnter(spot) {
  hoverTimer = setTimeout(() => {
    showAnimal(spot);
    incrementScore();
  }, 2000); // 2 seconds
}

// Handle mouse leave (clear timer)
function handleMouseLeave() {
  clearTimeout(hoverTimer);
}

// Show the hidden animal
function showAnimal(spot) {
  const element = document.getElementById(spot.id);
  element.style.backgroundImage = `url(${spot.animal})`;
  element.style.backgroundSize = 'cover';
  element.style.backgroundColor = 'transparent';
  element.removeEventListener('mouseenter', handleMouseEnter);
  element.removeEventListener('mouseleave', handleMouseLeave);
}

// Increment score and check for win
function incrementScore() {
  points++;
  document.getElementById('points').textContent = points;

  if (points === 5) {
    document.getElementById('win-message').classList.remove('hidden');
  }
}

// Start the game
initializeAnimalSpots();