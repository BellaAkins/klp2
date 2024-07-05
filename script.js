const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  nav.style.width = "50%";
  nav.style.display = "block";
});

close.addEventListener("click", () => {
  nav.style.width = 0;
  nav.style.display = "none";
});
/*
const carousel = document.querySelector(".story-container");

const dragging = (e) => {
  carousel.scrollLeft = e.pageX; //scrollLeft sets or returns the number of pixels an element content is scrolled horizontally
};

carousel.addEventListener("mousemove", dragging);
*/
const carousel = document.querySelector(".story-container");

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

