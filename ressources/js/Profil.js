'use strict';

export default class Profil {
    displayPhotographer(data) {
        const id = window.location.search.split('id=')[1];
        const photographer = !id ? photographersData : data.photographers.filter(photographer => photographer.id == id);
        const profil = document.querySelector(".profil");
        const templateProfil = `
            <div aria-label="Photographer Profil" class="profil__template">
                    <h2>${photographer[0].name}</h2>
                    <p class="profil__location">${photographer[0].city}, ${photographer[0].country}</p>
                    <p class="profil__tagline">${photographer[0].tagline}</p>
                    <ul class="profil__tags" ></ul>
                <button id="profil__contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographer[0].alt}'><img class="profil__portrait" src="./ressources/${photographer[0].portrait}" alt="${photographer[0].alt}"></a>
            </article>
            `

        profil.innerHTML = templateProfil;

        let el = document.getElementsByClassName('profil__tags');

        for (let j = 0; j < photographer[0].tags.length; j++) {
            el[0].innerHTML += `
            <li class="photographers__links" data-filter="${photographer[0].tags[j]}">#${photographer[0].tags[j]}</li>
            `;
        }
}
}