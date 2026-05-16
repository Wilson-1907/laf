const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

// YES button clicked
yesBtn.addEventListener('click', () => {
  question.textContent = "Awww 🥰 I love you too Mumo💗 Be my Wife ♥";
  gif.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJ4Z3p2c3Y4dWZ2NjU4OHNxMW1mMjVrdzhsY25xMm5wNWNwYzlwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.webp";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// NO button clicked — move it away
noBtn.addEventListener('click', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

