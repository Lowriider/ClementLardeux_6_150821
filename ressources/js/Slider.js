'use strict';


export default class sliderClass {
    constructor() {
      this.slideChange = document.querySelector('slider');
      this.nextSlide = document.querySelector('div .slider__next');
      this.prevSlide = document.querySelector('div .slider__prev');
      this.textNumber = 0;
      this.imgNumber = 0;
      this.imgs ="";
      this.slidertext ="";
      document.addEventListener('keydown', this.keyboard.bind(this));
      this.prevSlide.addEventListener('click', this.prevImg.bind(this));
      this.nextSlide.addEventListener('click', this.nextImg.bind(this));
    };
  
    prevImg() {
      this.imgNumber--;
      this.textNumber--;
      if (this.imgNumber < 0) {
        this.imgNumber = this.imgs.length - 1;
        this.textNumber = this.slidertext.length - 1;
      }
      document.querySelector('img').src = this.imgs[this.imgNumber];
      document.getElementById('text').innerHTML = this.slidertext[this.textNumber];
    }
  
    nextImg() {
      this.imgNumber++;
      this.textNumber++;
      this.move();
      if (this.imgNumber > (this.imgs.length - 1)) {
        this.imgNumber = 0;
        this.textNumber = 0;
      }
      document.querySelector('img').src = this.imgs[this.imgNumber];
      document.getElementById('text').innerHTML = this.slidertext[this.textNumber];
    }
  
    keyboard(e) {
      switch (e.keyCode) {
        case 37: // left
          this.nextImg();
          break;
        case 39: // right
          this.prevImg();
          break;
        case 32: // space 
          this.slideAutoStop();
          break;
      }
    }
  }