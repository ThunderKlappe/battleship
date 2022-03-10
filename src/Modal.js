import { DOMManip } from "./DOMManip";

export const Modal = (() => {
    async function displayModal(modal) {
        const modalContainer = DOMManip.makeNewElement("div", "modal-background", "modal back");
        modalContainer.appendChild(modal);
        Promise.resolve(document.body.appendChild(modalContainer)).then(() => {
            setTimeout(() => modalContainer.classList.add("active"), 0);
        });
    }
    return { displayModal };
})();
