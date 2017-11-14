import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyAF0fNqK1KWYj3m8r-mAdWWJX4RaVGZy38';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
    };
    YTSearch({key: API_KEY, term: 'goats'}, (videos) => {
      this.setState{(videos: videos)};
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'))
