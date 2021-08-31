
'use strict';

/////////////////////////////////////////

export default class Media {
    constructor(data, photographer) {
        this.boxLikesAndPrice(data, photographer)
        this.galleryImg = [];
        this.galleryText = [];
        this.photographerMedia;
    }

    

    // creates a box containing the total number of likes and the photographer's price
    boxLikesAndPrice(data, photographer) {
        let totalLikes = 0;
        let price;
        const id = window.location.search.split('id=')[1];
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
        return this.photographerMedia = photographerMedia;
    }
}
