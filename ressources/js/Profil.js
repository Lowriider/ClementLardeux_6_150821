'use strict';

export default class Profil {
    constructor() {
        this.photographerProfil;
    }
    displayPhotographer(data) {
        const id = window.location.search.split('id=')[1];
        const photographer = !id ? photographersData : data.photographers.filter(photographer => photographer.id == id);
        const profil = document.querySelector(".profil");
        const templateProfil = `
            <div aria-label="Photographer Profil" class="profil__template">
                <div class="profil__infos">
                    <h1>${photographer[0].name}</h1>
                    <p class="profil__location">${photographer[0].city}, ${photographer[0].country}</p>
                    <p class="profil__tagline">${photographer[0].tagline}</p>
                    <p class="profil__tags" ></p>
                </div>
                <button class="profil__contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographer[0].alt}'>
                <img class="profil__portrait" src="./ressources/${photographer[0].portrait}" alt="${photographer[0].alt}">
                </a>
            </article>
            `

        profil.innerHTML = templateProfil;

        let el = document.getElementsByClassName('profil__tags');

        for (let j = 0; j < photographer[0].tags.length; j++) {
            el[0].innerHTML += `
            <a class="profil__links" href="index.html" data-filter="${photographer[0].tags[j]}">#${photographer[0].tags[j]}</a>
            `;
        }
        return  this.photographerProfil = photographer;
    }
}
