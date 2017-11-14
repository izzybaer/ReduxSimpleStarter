import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyAF0fNqK1KWYj3m8r-mAdWWJX4RaVGZy38';

// now a class based component (aware of state, data changing over time)
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
    };
// need to pass data from App to VideoList (App is parent of VideoList)
    YTSearch({key: API_KEY, term: 'goats'}, (videos) => {
      this.setState({videos: videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList
          videos={this.state.videos}
         />
      </div>
      // passing props 'videos' to VideoList
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'))
