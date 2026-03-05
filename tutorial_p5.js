let particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20); // Sfondo scuro
  
  // Crea una particella dove si trova il mouse
  let p = {
    x: mouseX,
    y: mouseY,
    vX: random(-2, 2),
    vY: random(-2, 2),
    alpha: 255
  };
  particles.push(p);

  // Ciclo per muovere e disegnare le particelle
  for (let i = particles.length - 1; i >= 0; i--) {
    let part = particles[i];
    fill(0, 150, 255, part.alpha);
    noStroke();
    ellipse(part.x, part.y, 8);
    
    // Aggiorna  la posizione 
    part.x += part.vX;
    part.y += part.vY;
    part.alpha -= 5;
    
    // Rimuove particelle con poca colore  per non rallentare il PC
    if (part.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}
