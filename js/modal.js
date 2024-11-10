(() => {
    // Функція для налаштування модалки
    function setupModal(openButtonSelector, closeButtonSelector, modalSelector) {
        const openModalBtn = document.querySelector(openButtonSelector);
        const modal = document.querySelector(modalSelector);
        const closeModalBtns = modal.querySelectorAll(closeButtonSelector);

        if (openModalBtn && modal) {
            openModalBtn.addEventListener("click", () => toggleModal(modal));
        }

        closeModalBtns.forEach(btn => {
            btn.addEventListener("click", () => toggleModal(modal));
        });
    }

    // Функція для перемикання видимості модалки
    function toggleModal(modal) {
        modal.classList.toggle("is-hidden");
    }

    // Налаштування для модалки "Contact Us"
    setupModal(".btn-order-service", "[data-modal-close]", "[data-modal-contact-us]");

    // Налаштування для модалки "Nav Menu"
    setupModal(".menu-btn", "[data-modal-close]", "[data-modal-nav-menu]");
})();
