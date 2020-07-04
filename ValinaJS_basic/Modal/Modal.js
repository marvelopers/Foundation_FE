import "./Modal.css";

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    modal.style.display = "flex"
}

onclick.onclick = () => {
    modal.style.display = "none"
}