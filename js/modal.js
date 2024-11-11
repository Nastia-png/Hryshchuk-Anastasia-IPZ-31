(() => {
    function setupModal(openButtonSelector, closeButtonSelector, modalSelector) {
        const openModalBtn = document.querySelector(openButtonSelector);
        const modal = document.querySelector(modalSelector);

        if (!modal) {
            return;
        }

        const closeModalBtns = modal.querySelectorAll(closeButtonSelector);

        if (openModalBtn) {
            openModalBtn.addEventListener("click", () => toggleModal(modal));
        }

        if (closeModalBtns.length > 0) {
            closeModalBtns.forEach(btn => {
                btn.addEventListener("click", () => toggleModal(modal));
            });
        }
    }

    function toggleModal(modal) {
        modal.classList.toggle("is-hidden");
    }

    // "Contact Us" modal
    setupModal(".btn-order-service", "[data-modal-close]", "[data-modal-contact-us]");

    // "Nav Menu"
    setupModal(".menu-btn", "[data-modal-close]", "[data-modal-nav-menu]");
})();
