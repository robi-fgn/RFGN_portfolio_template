const scrollTopBtn = document.getElementById("scrollTopBtn");
const gallerySection = document.querySelector(".gallery-section");

// Show button when gallery section is reached
window.addEventListener("scroll", () => {
  if (gallerySection) {
    const galleryTop = gallerySection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= galleryTop) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }
});

// Scroll to top when clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function openProjectModal() {
  document.getElementById("projectModal").classList.add("active"); // Prevent scrolling
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = ""; // Restore scrolling
}

function closeModalOnOutsideClick(event) {
  if (event.target === document.getElementById("projectModal")) {
    closeProjectModal();
  }
}

// Close on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});
