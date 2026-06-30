// Selecting elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeBtn = document.querySelector('.close-btn');
const galleryItems = document.querySelectorAll('.gallery-item img');

// Loop through all gallery images
galleryItems.forEach(image => {
    image.addEventListener('click', (e) => {
        modal.style.display = 'flex'; // Modal show karein
        modalImg.src = e.target.src;  // Clicked image ka link modal mein dalein
    });
});

// Close modal when clicking 'X'
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking anywhere outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});