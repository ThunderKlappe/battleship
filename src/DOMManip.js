export const DOMManip = (() => {
    //shorthand to get elements easier
    const getElement = selector => document.querySelector(selector);
    const getElements = selector => document.querySelectorAll(selector);

    //shorthand to make a new element and add attributes to it
    const makeNewElement = (type, id = "", HTMLClass = "", text = "", ...attributes) => {
        const newElem = document.createElement(type);
        if (id != "") {
            newElem.setAttribute("id", id);
        }
        if (HTMLClass != "") {
            newElem.setAttribute("class", HTMLClass);
        }
        newElem.textContent = text;
        if (attributes.length > 0) {
            attributes.forEach(att => newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]));
        }

        return newElem;
    };

    //adds all of the DOM elements to a parent
    const appendChildren = (parent, ...children) => {
        children.forEach(child => parent.appendChild(child));
    };

    //inserts a DOM element after another element
    const insertAfter = (newNode, existingNode) => {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    };

    //clears out all child nodes of an element, skips as many elements as requested
    const removeAllChildren = (element, skip = 0) => {
        for (let i = element.childNodes.length; i > skip; i--) {
            element.childNodes[i - 1].remove();
        }
    };

    return { getElement, getElements, makeNewElement, appendChildren, insertAfter, removeAllChildren };
})();
