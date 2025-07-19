// Matrix-style falling code animation
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アカサタナハマヤラワ0123456789".split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Redirect logic for YouTube download
function redirectToDownloader() {
  const url = document.getElementById("youtubeUrl").value.trim();

  if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
    alert("❌ Please enter a valid YouTube URL.");
    return;
  }

  const encodedURL = encodeURIComponent(url);
 const downloaderURL = `https://y2mate.is/?url=${encodedURL}`;
  window.open(downloaderURL, "_blank");
}

