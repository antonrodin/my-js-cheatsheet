class Modal {

    constructor(id) {
        this.elem = document.getElementById(id);
        this.elem.addEventListener('click', e => {
            if (e.target.classList.contains('close-modal')) {
                this.elem.style.display = "none";
            }
        })
    }

    show() {
        this.elem.style.display = "block";
    }

}