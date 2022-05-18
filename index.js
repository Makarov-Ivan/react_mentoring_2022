const getElement = React.createElement;

const header = getElement(
    'h1', null,
    'header created by React.createElement'
)

class MyComponent extends React.Component {
    constructor() {
        super()
    };
    render = () => getElement("div", null, "React.Component")
}
const myComponent = new MyComponent();

class MyPureComponent extends React.PureComponent {
    constructor() {
        super()
    };
    render = () => getElement('p', null, "i'm pure component")
}
const pureComponent = new MyPureComponent();

const fnComponent = () => getElement('div', null, 'im functional component')
const reactApp = getElement(
    'div',
    null, [header,
        myComponent.render(),
        pureComponent.render(),
        fnComponent(),
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactApp);