import { DOMManip } from "./DOMManip";

export const Modal = (() => {
    async function displayModal(modal) {
        const modalContainer = DOMManip.makeNewElement("div", "modal-background", "modal back");
        modalContainer.appendChild(modal);
        Promise.resolve(document.body.appendChild(modalContainer)).then(() => {
            setTimeout(() => modalContainer.classList.add("active"), 0);
        });
    }
    async function closeCurrentModal() {
        const modal = DOMManip.getElement("#modal-background");
        Promise.resolve(modal.classList.remove("active")).then(setTimeout(() => modal.remove(), 200));
    }
    return { displayModal, closeCurrentModal };
})();
