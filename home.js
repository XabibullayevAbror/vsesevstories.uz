document.querySelectorAll('.details-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const link = btn.getAttribute('data-link');
    window.location.href = link;
  });
});

// Scroll bilan active linkni belgilash
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

  const carBox = document.getElementById("car3d");
  const carImg = document.getElementById("carImage");

  let isDragging = false;
  let startX;
  let rotationY = 0;

  // Mouse events
  carBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    carBox.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    carBox.style.cursor = "grab";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    startX = e.clientX;
    rotationY += deltaX * 0.5;
    carImg.style.transform = `rotateY(${rotationY}deg)`;
  });

  // Touch events (MOBIL)
  carBox.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
  });

  carBox.addEventListener("touchend", () => {
    isDragging = false;
  });

  carBox.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;
    rotationY += deltaX * 0.5;
    carImg.style.transform = `rotateY(${rotationY}deg)`;
  });