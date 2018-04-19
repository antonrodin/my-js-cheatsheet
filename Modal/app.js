const button1 = document.getElementById('show-modal-1');
const button2 = document.getElementById('show-modal-2');
const modal1 = new Modal('my-modal-1');
const modal2 = new Modal('my-modal-2');

button1.addEventListener('click', e => {
    e.preventDefault();
    modal1.show();
});

button2.addEventListener('click', e => {
    e.preventDefault();
    modal2.show();
});