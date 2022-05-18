import { getElement } from "./util.js";

export default class MyComponent extends React.Component {
    constructor() {
        super()
    };
    render = () => getElement("div", null, "I'm created by React.Component")
}