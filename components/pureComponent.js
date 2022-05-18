import { getElement } from "./util.js";

export default class MyPureComponent extends React.PureComponent {
    constructor() {
        super()
    };
    render = () => getElement('p', null, "I'm pure component")
}