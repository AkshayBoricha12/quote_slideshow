let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentSlideNo = 1;

function currentSlide(n) {
  for (const slide of slides) {
    slide.style.display = "none";
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].classList.add("active");
}

function plusSlide(n) {
  currentSlideNo += n;
  if (currentSlideNo > slides.length) {
    currentSlideNo = 1;
  } else if (currentSlideNo === 0) {
    currentSlideNo = slides.length;
  }
  clearActiveDot();
  currentSlide(currentSlideNo);
}

function clearActiveDot() {
  for (const dot of dots) {
    dot.classList.remove("active");
  }
}
