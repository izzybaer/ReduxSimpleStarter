import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAF0fNqK1KWYj3m8r-mAdWWJX4RaVGZy38';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    )
}

ReactDom.render(<App />, document.querySelector('.container'))