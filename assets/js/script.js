// Add random rotation to project cards
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    // Random rotation between -30 and 30 degrees
    const randomRotation = Math.random() * 40 - 20; // Range: -20 to 20
    const randomDirection = Math.random() > 0.5 ? 1 : -1;
    const rotation = Math.max(10, Math.abs(randomRotation)) * randomDirection;

    card.style.transform = `rotate(${rotation}deg)`;

    // On hover, increase scale and maintain rotation
    card.addEventListener("mouseenter", function () {
      this.style.transform = `rotate(${rotation}deg) scale(1.1)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = `rotate(${rotation}deg) scale(1)`;
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Sticky title behavior
  const sections = document.querySelectorAll(".portfolio-section");

  window.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const title = section.querySelector(".section-title");

      // Calculate when to "unstick" the title (after 3 projects)
      const projectsContainer = section.querySelector(".projects-container");
      const projects = projectsContainer.querySelectorAll(".project-card");

      if (projects.length >= 3) {
        const thirdProject = projects[2];
        const thirdProjectBottom =
          thirdProject.offsetTop + thirdProject.offsetHeight + sectionTop;

        // When scrolled past the third project, make title scroll naturally
        if (scrollPosition > thirdProjectBottom - window.innerHeight * 0.3) {
          title.style.position = "relative";
          title.style.top = `${thirdProjectBottom - sectionTop - 200}px`;
        } else {
          title.style.position = "sticky";
          title.style.top = "20vh";
        }
      }
    });
  });

  // Smooth scroll for hero menu
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
