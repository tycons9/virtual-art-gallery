let currentImageIndex = 0;
const images = [
  "image/art1.jpg",
  "image/art2.jpg",
  "image/art3.jpg",
  "image/art4.jpg",
];

function openModal(imageSrc) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImage").src = imageSrc;
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById("modalImage").src = images[currentImageIndex];
}

// Close modal when clicked outside of the image
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});

function searchGallery() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Add event listener for the search icon
document.querySelector(".search-icon").addEventListener("click", searchGallery);
