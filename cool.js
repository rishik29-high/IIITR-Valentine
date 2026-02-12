

const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 500 - 150;
  const y = Math.random() * 300 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 250,
    spread: 140,
    origin: { y: 0.6 }
  });

  const hearts = setInterval(createHeart, 10);
  setTimeout(() => clearInterval(hearts), 5000);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

const song = document.getElementById("loveSong");
const playPauseBtn = document.getElementById("playPause");
const progressFill = document.querySelector(".p rogress-fill");

playPauseBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playPauseBtn.textContent = "💖Pause Love";
  } else {
    song.pause();
    playPauseBtn.textContent = "💖 Play Love";
  }
});

song.addEventListener("timeupdate", () => {
  const percent = (song.currentTime / song.duration) * 100;
  progressFill.style.width = percent + "%";
});

const popup = document.getElementById("valentinePopup");
const closePopup = document.getElementById("closePopup");

let popupShown = false; 

yesBtn.addEventListener("click", () => {

  if (!popupShown) {
    popup.classList.add("active");
    popupShown = true;
  }

});
  
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});
