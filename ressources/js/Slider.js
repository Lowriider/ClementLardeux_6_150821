'use strict';


export default class Slider {
  constructor(media, text) {

    this.slider = document.querySelector('.slider');
    this.nextSlide = document.querySelector('div .slider__next');
    this.prevSlide = document.querySelector('div .slider__prev');
    this.close = document.querySelector('.slider__close');

    this.textNumber = 0;
    this.imgNumber = 0;
    this.imgs = media;
    this.slidertext = text;

    this.close.addEventListener('click', function () {
      this.slider.style.display = "none";
    }.bind(this))

    this.target = document.querySelectorAll('.portfolio__media');
    this.target.forEach(item => {
      item.addEventListener('click', function (e) {
        this.slider.style.display = "block";
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
      }.bind(this))
    });
    document.addEventListener('keydown', this.keyboard.bind(this));
    this.prevSlide.addEventListener('click', this.prevImg.bind(this));
    this.nextSlide.addEventListener('click', this.nextImg.bind(this));
  };
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
  prevImg() {
    this.imgNumber--;
    this.textNumber--;
    if (this.imgNumber < 0) {
      this.imgNumber = this.imgs.length - 1;
      this.textNumber = this.slidertext.length - 1;
    }
    this.sliderHTML();
  }

  nextImg() {
    this.imgNumber++;
    this.textNumber++;
    if (this.imgNumber > (this.imgs.length - 1)) {
      this.imgNumber = 0;
      this.textNumber = 0;
    }
    this.sliderHTML();
  }

  keyboard(e) {
    switch (e.keyCode) {
      case 37: // left
        this.nextImg();
        break;
      case 39: // right
        this.prevImg();
        break;
    }
  }
}