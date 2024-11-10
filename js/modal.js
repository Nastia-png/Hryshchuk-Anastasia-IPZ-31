(() => {
    const refs = {
        openModalBtn: document.querySelector(".btn-order-service"),
        // menuBtn: document.querySelector(".menu-btn"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        // modalSecond: document.querySelector("[data-modal-second]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
