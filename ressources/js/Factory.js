export default class Factory {
    constructor() {
        this.elPortfolio = document.querySelector('.portfolio');
    }
    createVideo(photographerMedia, i) {

        let articlePortfolio = document.createElement("article");
        articlePortfolio.className = "portfolio__article";        
        let portfolioTemplate = `
                <a href="#" title="${photographerMedia[i].photoName}">
                <video controls="controls" class="portfolio__media" src="./ressources/${photographerMedia[i].video}" alt="${photographerMedia[i].alt}" role="button">
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
}