'use strict';

/////////////////////////////////////////

export default class Slider {
  constructor(media, text) {

    this.slider = document.querySelector('.slider');
    this.nextSlide = document.querySelector('div .slider__next');
    this.prevSlide = document.querySelector('div .slider__prev');
    this.close = document.querySelector('.slider__close');
    this.target = document.querySelectorAll('.portfolio__article a');
  
    this.textNumber = 0;
    this.imgNumber = 0;
    this.imgs = media;
    this.slidertext = text;

    this.close.addEventListener('click', this.closeSlider.bind(this));

    // WHEN YOU CLICK ON A MEDIA OPEN SLIDER 
    this.target.forEach(item => {
      item.addEventListener('click', function (e) {
        this.slider.style.display = "block";
        if (e.target.currentSrc) {
          if (e.target.currentSrc.includes(".jpg")) {
            document.querySelector('.slider__image').style.display = "block";
            document.querySelector('.slider__video').style.display = "none";
            document.querySelector('.slider__image').src = e.target.currentSrc;
            document.querySelector('.slider__text').innerHTML = e.target.alt;
          } else if (e.target.currentSrc.includes(".mp4")) {
            document.querySelector('.slider__image').style.display = "none";
            document.querySelector('.slider__video').style.display = "block";
            document.querySelector('.slider__video').src = e.target.currentSrc;
            document.querySelector('.slider__text').innerHTML = e.target.alt;
          }
        } else if (e.target.children[0].currentSrc) {
          if (e.target.children[0].currentSrc.includes(".jpg")) {
            document.querySelector('.slider__image').style.display = "block";
            document.querySelector('.slider__video').style.display = "none";
            document.querySelector('.slider__image').src = e.target.children[0].currentSrc;
            document.querySelector('.slider__text').innerHTML = e.target.children[0].alt;
          } else if (e.target.children[0].currentSrc.includes(".mp4")) {
            document.querySelector('.slider__image').style.display = "none";
            document.querySelector('.slider__video').style.display = "block";
            document.querySelector('.slider__video').src = e.target.children[0].currentSrc;
            document.querySelector('.slider__text').innerHTML = e.target.children[0].alt;
          }
        }
      }.bind(this))
    });
    // EVENT KEYBOARD LISTENER
    document.addEventListener('keydown', this.keyboard.bind(this));
    // EVENT PREVIOUS MEDIA
    this.prevSlide.addEventListener('click', this.prevImg.bind(this));
    // EVENT NEXT MEDIA
    this.nextSlide.addEventListener('click', this.nextImg.bind(this));
  };
  // SLIDER RENDER HTML
  sliderHTML() {
    if (this.imgs[this.imgNumber].includes('.jpg')) {
      document.querySelector('.slider__image').style.display = "block";
      document.querySelector('.slider__video').style.display = "none";
      document.querySelector('.slider__image').src = `./ressources/${this.imgs[this.imgNumber]}`;
      document.querySelector('.slider__text').innerHTML = this.slidertext[this.textNumber];
    } else if (this.imgs[this.imgNumber].includes('.mp4')) {
      document.querySelector('.slider__image').style.display = "none";
      document.querySelector('.slider__video').style.display = "block";
      document.querySelector('.slider__video').src = `./ressources/${this.imgs[this.imgNumber]}`;
      document.querySelector('.slider__text').innerHTML = this.slidertext[this.textNumber];
    }
  }
  // PREVIOUS MEDIA FUNCTION
  prevImg() {
    this.imgNumber--;
    this.textNumber--;
    if (this.imgNumber < 0) {
      this.imgNumber = this.imgs.length - 1;
      this.textNumber = this.slidertext.length - 1;
    }
    this.sliderHTML();
  }
  // NEXT MEDIA FUNCTION
  nextImg() {
    this.imgNumber++;
    this.textNumber++;
    if (this.imgNumber > (this.imgs.length - 1)) {
      this.imgNumber = 0;
      this.textNumber = 0;
    }
    this.sliderHTML();
  }
  closeSlider() {
    this.slider.style.display = "none";
  }
  // KEYBOARD NAV FUNCTION
  keyboard(e) {
    switch (e.keyCode) {
      case 37: // left
        this.nextImg();
        break;
      case 39: // right
        this.prevImg();
        break;
      case 27:
        this.closeSlider();
    }
  }
}