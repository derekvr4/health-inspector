import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {

    return (
        <div>
        <h4>Hello World!</h4>
        <p>I love saying hello world!</p>
        </div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
