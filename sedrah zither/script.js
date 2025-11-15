function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "EXSZ13") {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("animation-screen").classList.remove("hidden");
    startMatrixAnimation();
    setTimeout(() => {
      document.getElementById("animation-screen").classList.add("hidden");
      document.getElementById("main-screen").classList.remove("hidden");
    }, 4000);
  } else {
    alert("Senha incorreta!");
  }
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Matrix-style animation
function startMatrixAnimation() {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "sedrah zither".split("");
  const fontSize = 20;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
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

  setInterval(draw, 50);
}