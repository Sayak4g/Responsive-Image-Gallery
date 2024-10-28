function openModal(elem) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    
    modal.style.display = "flex"; 
    modalImg.src = elem.querySelector('img').src;
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 0);
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); 
}
