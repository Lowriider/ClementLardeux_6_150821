'use strict';

export default class Getdata {
    async getData() {
        let url = 'Api/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        return data;
    }
}