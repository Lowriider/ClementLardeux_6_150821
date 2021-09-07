'use strict';

export default class Getdata {
    async getData() {
        let url = '../ressources/Json/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        return data;
    }
}