import React, { Component } from 'react';

import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  render() {
    return (
      <div className={css.app}>
        <Searchbar />
      </div>
    );
  }
}

export default App;

