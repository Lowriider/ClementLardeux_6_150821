'use strict';

import Getdata from './GetData.js';
import Photographer from './Photographer.js';
import Profil from './Profil.js';
import Media from './Media.js';
import Factory from './Factory.js';
import Slider from './Slider.js';
import Form from './Form.js';

function launch() {

    new Getdata().getData().then(function (data) {
        
        if (window.location.pathname.includes("/photographer.html")) {

            let profil = new Profil();
            profil.displayPhotographer(data);
            let media = new Media(data, profil.photographerProfil);
            let factory = new Factory(media.photographerMedia);
            let slider = new Slider(factory.galleryImg, factory.galleryText);
            let form = new Form(profil.photographerProfil);
            
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







