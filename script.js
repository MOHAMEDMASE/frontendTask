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

// **********************************************************************
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');


sidebarToggle.addEventListener('click', () => {
 
  sidebar.classList.toggle('active');
});
const sidebarToggle2 = document.getElementById('sidebar-toggle2');
const sidebar2 = document.getElementById('sidebar2');


sidebarToggle2.addEventListener('click', () => {
 
  sidebar2.classList.toggle('active');
});


