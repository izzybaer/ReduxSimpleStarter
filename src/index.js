// create a new component
// this component should produce some html
// take this components generated html and put it on the page (DOM)

import React from 'react';
import ReactDom from 'react-dom';


const App = function() {
    return <div>Hi!</div>;
}

ReactDom.render(App, document.getElementById('root'))