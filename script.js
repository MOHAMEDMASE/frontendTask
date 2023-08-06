const second_nav= document.querySelector(".second_nav");

window.addEventListener("scroll", () => {
  // Set the scroll trigger point (you can adjust this value)
  const triggerPoint = 200;

  if (window.scrollY > triggerPoint) {
    second_nav.classList.add("show");
  } else {
    second_nav.classList.remove("show");
  }
});
