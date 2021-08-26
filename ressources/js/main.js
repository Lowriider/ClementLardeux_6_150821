'use strict';

import Getdata from './GetData.js';
import Photographer from './Photographer.js';
import Profil from './Profil.js';
import Media from './Media.js';

function launch() {

    new Getdata().getData().then(function (data) {
        
        if (window.location.pathname.includes("/photographer.html")) {
            let media = new Media(data);
            new Profil().displayPhotographer(data);
            media.boxLikesAndPrice(data);
        }
        new Photographer().displayPhotographers(data);
    }).catch(function () {
        // console.error('Failed to load JSON');
    })
}
document.addEventListener('DOMContentLoaded', launch);

// import Photographers from './oldV.js';

// let data = new Photographers();
// console.log(data) // datas //







