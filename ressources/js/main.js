'use strict';

/////////////////////////////////////////

import Getdata from './data/GetData.js';
import Photographer from './homepage/Photographer.js';
import Profil from './profilpage/Profil.js';

function launch() {
    // PROMISE WAIT TO GET DATA BEFORE SENDING IT TO OTHER OBJECTS
    new Getdata().getData().then((data) => {
           if (window.location.pathname.includes("photographer.html")) {
              document.addEventListener('DOMCoententLoaded', new Profil().displayPhotographer(data));
           }
           else {
              document.addEventListener('DOMContentLoaded', new Photographer().displayPhotographers(data));
           }
    }).catch((err) => {
        console.error(err);
    });
}
// WAIT DOM IS LOADED TO LAUNCH FUNCTION
document.addEventListener('DOMContentLoaded', launch);








