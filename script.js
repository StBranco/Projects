const toggleBtn = document.getElementById('toggle-dark');
const body = document.body;

// Gerar estrelas aleatórias
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.id = 'stars-container';
  starsContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  
  // Criar 50 estrelas em posições aleatórias
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 0.5;
    const duration = Math.random() * 3 + 2;
    
    star.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 ${size * 2}px rgba(74, 144, 226, 0.8);
      animation: twinkle ${duration}s ease-in-out infinite;
    `;
    
    starsContainer.appendChild(star);
  }
  
  body.appendChild(starsContainer);
}

// Toggle dark mode
toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  
  const starsContainer = document.getElementById('stars-container');
  
  if (body.classList.contains('dark-mode')) {
    if (!starsContainer) {
      createStars();
    } else {
      starsContainer.style.display = 'block';
    }
    toggleBtn.textContent = '☀️';
  } else {
    if (starsContainer) {
      starsContainer.style.display = 'none';
    }
    toggleBtn.textContent = '🌙';
  }
});