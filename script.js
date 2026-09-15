const envelope = document.getElementById("openEnvelope");
const openButton = document.getElementById("openButton");
const cover = document.getElementById("cover");
const letter = document.getElementById("letter");
const backTop = document.getElementById("backTop");

function openLetter() {
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");

  // O flap abre primeiro. Só depois a carta ganha prioridade visual e sobe.
  setTimeout(() => {
    envelope.classList.add("rising");
  }, 480);

  setTimeout(() => {
    cover.classList.remove("active");
    letter.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    createHearts(18);
  }, 1750);
}

envelope.addEventListener("click", openLetter);
envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") openLetter();
});
openButton.addEventListener("click", openLetter);

function createHearts(amount) {
  const container = document.querySelector(".hearts");
  for (let i = 0; i < amount; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = Math.random() > .25 ? "♥" : "♡";
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDelay = `${Math.random() * 4}s`;
    h.style.fontSize = `${10 + Math.random() * 13}px`;
    container.appendChild(h);
    setTimeout(() => h.remove(), 11000);
  }
}

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
