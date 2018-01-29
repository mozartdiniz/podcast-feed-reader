import React, { Component } from 'react';

import EpisodeList from './components/EpisodeList';

import feedLoader from './utils/feedLoader';

import './App.css';

class App extends Component {
  state = {
    episodes: [],
  }
  
  componentDidMount() {
    feedLoader((episodes => {
      this.setState({
        episodes,
      });
    }));
  }

  render() {
    return (
      <div className="App">
        <EpisodeList episodes={this.state.episodes} />
      </div>
    );
  }
}

export default App;
