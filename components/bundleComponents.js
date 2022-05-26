import { getElement } from "./util.js";

export default (components) => {
    const componentsWithKeys = components.map((component, index) => {
        return {...component, key: index }
    })
    return getElement('div', null, componentsWithKeys)
}