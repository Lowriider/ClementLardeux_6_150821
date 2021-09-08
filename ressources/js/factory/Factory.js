'use strict'

/////////////////////////////////////////

export default class Factory {

    constructor(photographerMedia) {
        this.media = photographerMedia;
        this.elPortfolio = document.querySelector('.portfolio');
        this.galleryImg = [];
        this.galleryText = [];
        this.createMedia(this.media);
    }
    
    createMedia(photographerMedia) {
        for (let i = 0; i < photographerMedia.length; i++) {
            if (photographerMedia[i].image) {
                // CREATE IMG //
                this.createImage(photographerMedia, i);
                // TAKE IMG + ALT AND PUT THEM IN ARRAYS
                this.galleryImg.push(photographerMedia[i].image);
                this.galleryText.push(photographerMedia[i].photoName);
            } else if (photographerMedia[i].video) {
                 // CREATE VID //
                this.createVideo(photographerMedia, i)
                // TAKE IMG + ALT AND PUT THEM IN ARRAYS
                this.galleryImg.push(photographerMedia[i].video);
                this.galleryText.push(photographerMedia[i].photoName);
            }
        }
    }
    createVideo(photographerMedia, i) {

        let articlePortfolio = document.createElement("article");
        articlePortfolio.className = "portfolio__article";        
        let portfolioTemplate = `
                <a href="#" title="${photographerMedia[i].photoName}">
                <video controls="controls" class="portfolio__media" src="ressources/${photographerMedia[i].video}">
                </a>
                <div class="portfolio__text">
                <h2 class="portfolio__title">${photographerMedia[i].photoName}</h2>
                <p class="portfolio__likes">${photographerMedia[i].likes}</p>
                <i class="far fa-heart portfolio__heart" aria-label="likes" role="button"></i>
                </div>`;
        this.elPortfolio.appendChild(articlePortfolio)
        articlePortfolio.innerHTML = portfolioTemplate;
    }

    createImage(photographerMedia, i) {

        let articlePortfolio = document.createElement("article");
        articlePortfolio.className = "portfolio__article";
        let portfolioTemplate = `
                <a href="#" title="${photographerMedia[i].photoName}">
                <img class="portfolio__media" src="ressources/${photographerMedia[i].image}" alt="${photographerMedia[i].alt}">
                </a>
                <div class="portfolio__text">
                <h2 class="portfolio__title">${photographerMedia[i].photoName}</h2>
                <p class="portfolio__likes">${photographerMedia[i].likes}</p>
                <i class="far fa-heart portfolio__heart" aria-label="likes" role="button"></i>
                </div>`;
        this.elPortfolio.appendChild(articlePortfolio);
        articlePortfolio.innerHTML = portfolioTemplate;
    }
}