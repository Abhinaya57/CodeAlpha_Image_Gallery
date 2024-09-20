let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;

function showImage(index) {
    const gallery = document.querySelector('.gallery');
    gallery.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    showImage(currentIndex);
}
