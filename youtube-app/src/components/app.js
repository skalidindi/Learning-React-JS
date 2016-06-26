import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { YOUTUBE_API_KEY } from '../api-keys';
import YTSearch from 'youtube-api-search';
const ytSearch = YTSearch;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  videoSearch(term) {
    ytSearch({ key: YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const debouncedVideoSearch =
      _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ term => debouncedVideoSearch(term) } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }
        />
      </div>
    );
  }
}

export default App;
