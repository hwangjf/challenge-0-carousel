const IMAGES = [
  'url(./images/hero-image-0.jpg)',
  'url(./images/hero-image-1.jpg)',
  'url(./images/hero-image-2.jpg)',
  'url(./images/hero-image-3.jpg)'
]

document.addEventListener('DOMContentLoaded', () => {
  const carouselImage = document.querySelector('.image')

  let counter = 0
  function rotateImage() {
    carouselImage.style.backgroundImage = IMAGES[counter++]
    if (counter > IMAGES.length-1) counter = 0
  }

  setInterval(rotateImage, 2000)
})