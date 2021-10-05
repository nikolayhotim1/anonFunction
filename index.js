'use strict';
window.onload = function init() {
    let button = document.getElementById('bake');

    button.onclick = function () {
        console.log('Time to bake the cookies.');
        cookies.bake(2500);
    }
};

let cookies = {
    instructions: 'Preheat oven to 350...',

    bake: function (time) {
        console.log('Baking the cookies.');

        setTimeout(function () {
            alert('Cookies are ready, take them out to cool.');
            console.log('Cooling the cookies.');
        }, time);
    }
};

setTimeout(function () {
    alert('Cookies are cool, time to eat!');
}, 1000);
