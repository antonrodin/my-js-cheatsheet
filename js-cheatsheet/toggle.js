/* How to toggle elements on screen with Vanilla Javascript */
/* Also you should create some .display-none class in your CSS with "display: none" property */
/* Eaasyyyy */
var divToShow = document.getElementById('div-to-show');

document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    
    divToShow.classList.toggle('display-none');
});
