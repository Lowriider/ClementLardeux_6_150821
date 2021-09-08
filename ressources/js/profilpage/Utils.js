'use strict';

import Factory from "../factory/Factory.js";

/////////////////////////////////////////

export default class Utils {
    constructor(photographer, photographerMedia) {

        this.totalLikes = 0;
        this.mediaSortArray = [];
        this.price = photographer[0].price;
        this.heart = document.querySelectorAll('.portfolio__heart');
        this.dropdownFold = document.getElementsByClassName('dropdown__button');
        this.dropdownClose = document.getElementsByClassName('dropdown__close');
        this.dropdownHidden = document.getElementsByClassName('dropdown__hidden');
        this.dropdownFilter = Array.from(document.getElementsByClassName('dropdown__filter'));

        this.boxLikesAndPrice(photographerMedia);
        this.dropDown();
        // add or remove a 'like' when clicking on the 'like' icon   
        this.heart.forEach(item => {
            item.addEventListener('click', function (e) {
                let total = document.querySelector('.likes__total');

                if (e.target.classList.contains("portfolio__heart--liked")) {
                    e.target.classList.replace('portfolio__heart--liked', 'portfolio__heart');
                    e.target.classList.replace('fas', 'far');
                    e.target.previousElementSibling.innerHTML--;
                    this.totalLikes--;
                    total.innerHTML = parseInt(this.totalLikes);
                } else {
                    e.target.classList += '--liked';
                    e.target.classList.replace('far', 'fas');
                    e.target.previousElementSibling.innerHTML++;
                    this.totalLikes++;
                    total.innerHTML = parseInt(this.totalLikes);
                }
            }.bind(this));
        });
        // FILTER MEDIA BY ...
        this.dropdownFilter.forEach((item, index) => item.addEventListener('click', (e) => {
            this.dropdownHidden[0].style.display = "none";
            // IF EVENT = POPULARITE
            if (index === 0) {
                this.dropdownFold[0].innerHTML = `Popularité <span class="fas fa-chevron-down dropdown__open" role="button" aria-hidden="true"></span>`;
                // SORT MEDIA BY LIKES
                this.mediaSortArray = photographerMedia.sort((a,b) => {
                    return b.likes - a.likes;
                });
                // IF EVENT = DATE
            } else if (index === 1) {
                this.dropdownFold[0].innerHTML = `Date <span class="fas fa-chevron-down dropdown__open" role="button" aria-hidden="true"></span>`;
                // SORT MEDIA BY MOST RECENT DATE
                this.mediaSortArray = photographerMedia.sort((a, b) =>{
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                });
                 // IF EVENT = TITRE
            } else if (index === 2) {
                this.dropdownFold[0].innerHTML = `Titre <span class="fas fa-chevron-down dropdown__open" role="button" aria-hidden="true"></span>`;
                // SORT MEDIA BY ALPHABETIC ORDER
                this.mediaSortArray = photographerMedia.sort((a,b) =>{
                    if(a.photoName < b.photoName) {
                        return -1;
                    }
                    else if(a.photoName > b.photoName) {
                        return 1;
                    }
                });
            }
            this.displaySortMedia(this.mediaSortArray);
        }));
    }
    // creates a box containing the total number of likes and the photographer's price
    boxLikesAndPrice(photographerMedia) {
        for (let i = 0; i < photographerMedia.length; i++) {
            this.totalLikes += photographerMedia[i].likes;
        }
        let box = document.querySelector(".likes");
        let boxTemplate = `
                <span class="likes__total">${this.totalLikes}</span>
                <i class="fas fa-heart likes__heart" aria-label='likes'></i>
                <span>${this.price} €/ jour</span>
                `
        box.innerHTML = boxTemplate;
    }
    // DISPLAY DROPDOWN MENU
    dropDown() {

        if (this.dropdownFold) {
            this.dropdownFold[0].addEventListener('click', () => {
                this.dropdownHidden[0].style.display = 'block';
            });
        }
        if (this.dropdownClose) {
            this.dropdownClose[0].addEventListener('click', () => {
                this.dropdownHidden[0].style.display = "none";
            });
        }
    }
    // DELETE ALL MEDIA AND CALL FACTORY TO REBUILD IT BY FILTER CALLED
    displaySortMedia() {
        document.querySelector('.portfolio').innerHTML = "";
        new Factory(this.mediaSortArray);
    }
}