export default class HomePage {

    displayPhotographers(data) {
        for (let i = 0; i < data.photographers.length; i++) {

            let photographe = data.photographers[i];
            let elList = document.getElementsByClassName('photographers');
            let elPhotographers = document.createElement('div');
            elPhotographers.className = "photographers__introduction";
            let templatePhotographer = `
                    <a href="photographer.html?id=${photographe.id}" title="${photographe.name}">
                    <img class="photographers__portrait" src="./ressources/${photographe.portrait}" alt="${photographe.alt}">
                    <h2 class="photographers__name">${photographe.name}</h2>
                    </a>
                    <p class="photographers__location">${photographe.city}, ${photographe.country}</p>
                    <p class="photographers__tagline">${photographe.tagline}</p>
                    <p class="photographers__price">${photographe.price}€/jour</p>
                    <ul class="photographers__filters"></ul>
                    `;
            elList[0].appendChild(elPhotographers);
            elPhotographers.innerHTML = templatePhotographer;
            let el = document.getElementsByClassName('photographers__filters');

            for (let j = 0; j < data.photographers[i].tags.length; j++) {
                el[i].innerHTML += `
                <li class="photographers__links" data-filter="${photographe.tags[j]}">#${photographe.tags[j]}</li>
                `;
            }
        }
    }
    displayPhotographer(data) {
        console.log(window.location)
    }
}