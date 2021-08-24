'use strict';
// GET THE DATA FISH (PHOTOGRAPHERS & MEDIAS)
export default class Photographers {
    constructor() {
        this.getData(this.displayPhotographers)
    }
    getData(callback) {
        
        let request = new XMLHttpRequest();
        request.callback = callback;
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                this.data = JSON.parse(this.responseText); // recupere les datas //
                this.callback(this.data);
            }
        };
        request.open("GET", "../photographers.json");
        request.send();
    }
    displayPhotographers(data) {
        for (let i = 0; i < data.photographers.length; i++) {

            let photographe = data.photographers[i];
            let elList = document.getElementsByClassName('photographers');
            let elPhotographers = document.createElement('div');
            elPhotographers.className = "photographers__introduction";
            let templatePhotographer = `
                <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img class="photographers__portrait" src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="photographers__name">${photographe.name}</h2>
                </a>
                <p class="photographers__location">${photographe.city}, ${photographe.country}</p>
                <p class="photographers__tagline">${photographe.tagline}</p>
                <p class="photographers__price">${photographe.price}€/jour</p>`;

            elList[0].appendChild(elPhotographers);
            elPhotographers.innerHTML = templatePhotographer;
            let el = document.getElementsByClassName('photographers__introduction');
            
            for (let j = 0; j < data.photographers[i].tags.length; j++) {
                el[i].innerHTML += `<a href='#'>#${photographe.tags[j]}</a> `;
            }
        }
    }
}