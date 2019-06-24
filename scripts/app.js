const NUM_IMAGES = 4

document.addEventListener('DOMContentLoaded', () => {
  const carouselHeroImage = document.querySelector('.image')

  let counter = 0
  function rotateImage() {

    carouselHeroImage.style.backgroundImage = `url(./images/hero-image-${counter++}.jpg)`
    if (counter > NUM_IMAGES-1) counter = 0
  }


  setInterval(rotateImage, 2000)
})