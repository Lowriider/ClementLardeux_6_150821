export default class Factory {

    run() {
        this.createVideo = function (photographerMedia, i) {
            let portfolioTemplate = `
                <a href="#" title="${photographerMedia[i].photoName}">
                <video class="portfolio__media" src="./ressources/${photographerMedia[i].image}" alt="${photographerMedia[i].alt}" role="button">
                </a>
                <div class="portfolio__text">
                <h2 class="portfolio__title">${photographerMedia[i].photoName}</h2>
                <p class="portfolio__price">${photographerMedia[i].price} €</p>
                <p class="portfolio__likes">${photographerMedia[i].likes}</p>
                <i class="far fa-heart heart-btn" aria-label="likes" role="button"></i>
                </div>`;
            console(photographerMedia[i].image);
            this.elPortfolio.appendChild(this.articlePortfolio)
            this.articlePortfolio.innerHTML = portfolioTemplate;
        }
        this.createImage = function (photographerMedia, i) {
            console.log(i)
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
            console.log(photographerMedia[i].image);
            this.elPortfolio.appendChild(this.articlePortfolio);
            this.articlePortfolio.innerHTML = portfolioTemplate;
        }

    }
}