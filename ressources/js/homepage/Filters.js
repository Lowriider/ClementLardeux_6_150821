'use strict';
/////////////////////////////////////////

// OBJECT FILTER TAGS
export default class Filter {

    // FILTER TAGS
    constructor() {
        this.list = Array.from(document.querySelectorAll('.nav__filters span'));
        this.articles = document.querySelectorAll('.photographers__introduction');

        // EVENT LISTENER ADD CLASS ON LI TARGET
        this.list.forEach(item => {
            item.addEventListener('click', function (e) {
                let targetClass = e.target.classList;

                if (-1 === targetClass.value.indexOf('active')) {
                    targetClass.add('active')

                } else {
                    targetClass.remove('active')
                }
                this.filterPhotographers(this.articles);
            }.bind(this));
        });


    }
    // ADD SELECTED TAGS IN NEW ARRAY
    getActiveFilters() {
        let currentFilters = document.querySelectorAll('.active');
        let activedFiltersArray = [];

        currentFilters.forEach(currentFilter => {
            activedFiltersArray.push(currentFilter.getAttribute('data-filter'));
        });

        return activedFiltersArray;
    }
    // COMPARE SELECTED TAGS IN ARRAY WITH ARTICLES CLASS
    checkFilters(article) {

        let activeFilters = this.getActiveFilters();
        let articleClassValue = article.classList.value;
        let classes = articleClassValue.split(' ');
        let compareData = activeFilters.filter(item => classes.includes(item));

        return activeFilters.length == compareData.length;
    }
    // HIDE / SHOW FILTERED PHOTOGRAPHERS
    filterPhotographers(articles) {
        articles.forEach((article) => {
            if (this.checkFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }
}