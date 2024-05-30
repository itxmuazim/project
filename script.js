const imageContainer = document.querySelector('.image-container'); // Replace with the class of the container holding the images

const images = imageContainer.querySelectorAll('img'); // Select all the image elements within the container

let currentImageIndex = 0;

function loopImages() {
  images[currentImageIndex].classList.add('hidden'); // Hide the current image

  currentImageIndex = (currentImageIndex + 1) % images.length; // Increment the index and handle overflow

  images[currentImageIndex].classList.remove('hidden'); // Show the next image

  setTimeout(loopImages, 2000); // Call the function again after 2 seconds (adjust as needed)
}

loopImages();

// --------------------------------------------------------------NAV BAR----------------------------------------------
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove("active"));
    
    // Add active class to the clicked link
    this.classList.add("active");
  });
});
//--------------------------------------------------------------------------------------------------------------------
function myFunction() {
  location.replace("contact.html")
}