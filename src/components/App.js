import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar';
import ImageList from './imageList';
import api from '../api/api';

class App extends Component {

  state = { images: [] };

 onSearchSubmit = async (searchTerm) => {
    const response = await api.get('search/photos', {
      params: { query: searchTerm },
     
    });     /*
    .then((response) => {
    });
    */

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
