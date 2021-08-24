'use strict';

import Getdata from './GetData.js';
import HomePage from './HomePage.js';

function launch() {
    console.log(new Getdata().getData())
    new Getdata().getData().then(function (data) {
        if (window.location.pathname.includes("/photographers.html")) {
            console.log('hello')
            new HomePage().displayPhotographer(data);
            console.log(window.location.pathname)
        }
        new HomePage().displayPhotographers(data);
    }).catch(function () {
        console.error('Failed to load JSON');
    })
}
document.addEventListener('DOMContentLoaded', launch);

// import Photographers from './oldV.js';

// let data = new Photographers();
// console.log(data) // datas //







