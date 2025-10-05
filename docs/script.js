// Matrix Background
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("matrix").appendChild(canvas);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = fontSize + "px IBM Plex Mono";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 20);

// Hacker Text Effect
function startHackerEffect() {
  const glitchText = document.getElementById("glitch-text");
  const finalText = "Hello,\n I'm Omran";
  let iteration = 0;
  const chars = "01#@$%&*+";

  function hackerEffect() {
    glitchText.innerText = finalText
      .split("")
      .map((char, i) => {
        if (i < iteration) {
          return finalText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iteration < finalText.length) {
      iteration++;
      setTimeout(hackerEffect, 100);
    }
  }
  setTimeout(hackerEffect, 500);
}

// Audio
const audio = new Audio("assets/bg.mp3");
audio.volume = 0.5;

// ===== Start Screen Logic =====
const startScreen = document.getElementById("start-screen");
const startText = document.getElementById("start-text");
const heroSection = document.querySelector(".hero");

startText.addEventListener("click", () => {
  startScreen.style.display = "none";  // hide start screen
  heroSection.classList.remove("hidden"); // show main site
  startHackerEffect();  // start text animation
  audio.play();         // play sound
  
});
