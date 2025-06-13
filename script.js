const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const sticker = document.getElementById("sticker");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    noBtn.style.position = "absolute";
    noBtn.style.left = ${x}px;
    noBtn.style.top = ${y}px;
});

yesBtn.addEventListener("click", () => {
    sticker.style.display = "block";
});