function scrollLeft() {
  document.getElementById("productContainer").scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

function scrollRight() {
  document.getElementById("productContainer").scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}




// Scroll to top button
// const scrollBtn = document.getElementById("scrollToTopBtn");

// window.onscroll = () => {
//   scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
// };

// scrollBtn.onclick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

// Countdown Timer
const targetDate = new Date("September 5, 2025 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
