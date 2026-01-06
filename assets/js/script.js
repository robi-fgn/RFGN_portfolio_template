const scrollTopBtn = document.getElementById("scrollTopBtn");
const gallerySection = document.querySelector(".gallery-section");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (gallerySection && footerSection) {
    const galleryTop = gallerySection.offsetTop;
    const footerTop = footerSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    // Show button when gallery is reached
    if (
      scrollPosition >= galleryTop &&
      window.scrollY < footerTop - window.innerHeight
    ) {
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

function openProjectModal(card) {
  document.getElementById("modalImage").src = card.dataset.image;
  document.getElementById("modalTitle").textContent = card.dataset.title;
  document.getElementById("modalDate").textContent = card.dataset.date;
  document.getElementById("modalDescription").textContent =
    card.dataset.description;

  document.getElementById("projectModal").classList.add("active");
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "";
}

function closeModalOnOutsideClick(event) {
  if (event.target.id === "projectModal") {
    closeProjectModal();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});
