import { getElement } from "./util.js";
import React from 'react';

export default class MyComponent extends React.Component {
    constructor() {
        super()
    };
    render = () => getElement("div", null, "I'm created by React.Component")
}