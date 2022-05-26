import { getElement } from "./util.js";
import React from 'react';

export default class MyComponent extends React.Component {
    constructor() {
        super()
    };
    render(){
        return <div>
            I'm created by React.Component with JSX!!
        </div>
    }
}