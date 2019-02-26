import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './searchBar';

class App extends Component {

  onSearchSubmit(searchTerm) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchTerm },
      headers: {
        Authorization: 'Client-ID 4971177da7344138d3527b4a5222fab3900d1115f6cc7dfe06b3a2bf5e440fe9'
      }
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
