import components from './components/index.js'
import ReactDOM from 'react-dom';

const componentBundle = components.getBundle([
    components.simple,
    components.functional(),
    new components.plain().render(),
    new components.pure().render(),
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(componentBundle);