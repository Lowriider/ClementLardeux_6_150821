'use strict';
/////////////////////////////////////////

export default class Media {
    constructor(data) {
        this.elPortfolio = document.querySelector('.portfolio');
    }
    // call the GalleryFactory to create the media section with 'Like' function and the box
    // creates a box containing the total number of likes and the photographer's price
    boxLikesAndPrice(data) {
        let totalLikes = 0;
        let price;
        const id = window.location.search.split('id=')[1];
        const photographer = !id ? data.photographers : data.photographers.filter(photographer => photographer.id == id);
        const photographerMedia = !id ? data.media : data.media.filter(media => media.photographerId == id);
        for (let i = 0; i < photographerMedia.length; i++) {
            totalLikes += photographerMedia[i].likes;
        }
        for (let j = 0; j < photographer.length; j++) {
            price = photographer[j].price;
        }
        let box = document.querySelector(".likes");
        let boxTemplate = `
                <span id="total-likes">${totalLikes}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${price} €/ jour</span>
                `
        box.innerHTML = boxTemplate;
        this.factory(photographerMedia);
    }

    factory(photographerMedia) {

        for (let i = 0; i < photographerMedia.length; i++) {

            if (photographerMedia[i].image) {
                this.createImage(photographerMedia, i);
            } else if (photographerMedia[i].video) {
                this.createVideo(photographerMedia, i)
            }
        }
    }

    createImage(photographerMedia, i) {

        let articlePortfolio = document.createElement("article");
        articlePortfolio.className = "portfolio__article";
        let portfolioTemplate = `
            <a href="#" title="${photographerMedia[i].photoName}">
            <img class="portfolio__media" src="./ressources/${photographerMedia[i].image}" alt="${photographerMedia[i].alt}" role="button">
            </a>
            <div class="portfolio__text">
            <h2 class="portfolio__title">${photographerMedia[i].photoName}</h2>
            <p class="portfolio__price">${photographerMedia[i].price} €</p>
            <p class="portfolio__likes">${photographerMedia[i].likes}</p>
            <i class="far fa-heart heart-btn" aria-label="likes" role="button"></i>
            </div>
        `;
        this.elPortfolio.appendChild(articlePortfolio);
        articlePortfolio.innerHTML = portfolioTemplate;
    }
    createVideo(photographerMedia, i) {
        let articlePortfolio = document.createElement("article");
        articlePortfolio.className = "portfolio__article";
        let portfolioTemplate = `
                    <a href="#" title="${photographerMedia[i].photoName}">
                    <video class="portfolio__media" src="./ressources/${photographerMedia[i].video}" alt="${photographerMedia[i].alt}" role="button">
                    </a>
                    <div class="portfolio__text">
                    <h2 class="portfolio__title">${photographerMedia[i].photoName}</h2>
                    <p class="portfolio__price">${photographerMedia[i].price} €</p>
                    <p class="portfolio__likes">${photographerMedia[i].likes}</p>
                    <i class="far fa-heart heart-btn" aria-label="likes" role="button"></i>
                    </div>`;
        this.elPortfolio.appendChild(articlePortfolio)
        articlePortfolio.innerHTML = portfolioTemplate;
    }

}



// let eltImage = document.createElement('img');
// eltImage.setAttribute('src', `./ressources/${photographerMedia[i].image}`);
// eltImage.setAttribute('alt', `${photographerMedia[i].alt}`);
// eltImage.setAttribute('role', 'button');
// eltImage.className = 'portfolio__media';
// let eltVideo = document.createElement('video');
// eltVideo.setAttribute("controls", "controls")
// eltVideo.setAttribute('src', `./ressources/${photographerMedia[i].video}`);
// eltVideo.setAttribute('role', 'button');
// eltVideo.className = 'portfolio__media';
// elPortfolio.appendChild(eltVideo);