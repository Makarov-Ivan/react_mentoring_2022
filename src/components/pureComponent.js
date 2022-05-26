import { getElement } from "./util.js";
import React from 'react';

export default class MyPureComponent extends React.PureComponent {
    constructor() {
        super()
    };
    render = () => getElement('p', null, "I'm pure component!!!")
}