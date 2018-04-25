const content = document.querySelector('.toggle-content');
const btn = document.querySelector('#toggle-button');

btn.addEventListener('click', e => { 
    toggle(content);
});

function toggle(elem) {
    elem.style.display = (elem.style.display == "none") ? "block" : "none";
}


/**
 * Button, event Handler ES5
 */

Toggle = function(button, content) {

    const elem = document.querySelector(content);
    const btn = document.querySelector(button);

    btn.addEventListener('click', e => {
        elem.style.display = (elem.style.display == "none") ? "block" : "none";
    });


    return {
        btn,
        elem,
        hide: function() {
            elem.style.display = 'none';
        },
        show: function() {
            elem.style.display = 'block';
        }
    }

 };

myButton = new Toggle('#toggle-button-2', '.toggle-content-2');
myButton2 = new Toggle('#toggle-button-3', '.toggle-content-3');

/*
setInterval(function() {
    myButton.hide();
    console.log('Hide Element in 3 seg')
}, 3000);

setInterval(function() {
    myButton.show();
    console.log('Show Element in 3 seg')
}, 3000);
*/