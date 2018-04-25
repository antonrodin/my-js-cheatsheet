const content = document.querySelector('.toggle-content');
const btn = document.querySelector('#toggle-button');

btn.addEventListener('click', e => { 
    toggle(content);
});

function toggle(elem) {
    elem.style.display = (elem.style.display == "none") ? "block" : "none";
}