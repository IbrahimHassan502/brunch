// ====== Menu Button ======
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", (e) => {
  const nav = document.querySelector("nav"),
    ul = document.querySelector("nav ul"),
    ulStyle = ul.currentStyle || window.getComputedStyle(ul);

  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
  nav.classList.contains("active")
    ? (nav.style.height = `${
        parseInt(ulStyle.height) + 2 * parseInt(ulStyle.margin)
      }px`)
    : (nav.style.height = 0);
});

// ====== Dish Rotation Animation ======
const clampJs = (min, num, max) => {
  return num > min && num < max ? num : num < min ? min : max;
};

const specialArticle = document.querySelector(".specials");
const specialImgs = document.querySelectorAll(".specials .small-dishes img"),
  maxRotation = 45,
  maxThickness = 8.5;
specialArticle.addEventListener("mousemove", (e) => {
  const halfLine = (e.target.getBoundingClientRect().width - 40) / 2;
  const relativePos = ((e.clientX - halfLine) / halfLine) * 1.2;
  specialImgs.forEach(
    (img) =>
      (img.style.cssText = `
    transform: rotateY(clamp(-30deg, ${-relativePos * 15}deg, 30deg));
    filter: drop-shadow(clamp(0px,${
      relativePos * 25
    }px, 25px) 15px 45px rgba(84, 98, 108, 0.47))
      drop-shadow(${clampJs(-8.5, relativePos * 8.5, 8.5)}px 0px 0px #00162d);
    `)
  );
});
// ====== fixating header after page fold ======
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY >= 350) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
// ====== hide loading screen when DOM is ready ======
const loadScreen = document.querySelector(".loading");
window.addEventListener("load", () => {
  setTimeout(() => {
    loadScreen.style.opacity = 0;
    setTimeout(() => {
      loadScreen.style.display = "none";
    }, 700);
  }, 1400);
});
