function openLightbox(imageSrc) {
  document.getElementById("lightbox-img").src = imageSrc;
  document.getElementById("lightbox").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling in the background
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "auto"; // Allow scrolling again
}

// Function to update the copyright year
function updateCopyrightYear() {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Set the text content of the span with id "year" to the current year
  document.getElementById('year').textContent = currentYear;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateCopyrightYear);
