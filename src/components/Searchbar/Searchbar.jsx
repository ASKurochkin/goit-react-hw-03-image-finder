import PropTypes from 'prop-types';
import React, { Component } from 'react';

import searchIcon from '../../img/search.svg'
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  static propTypes = {};

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <img className={css.searchFormButtonLabel} src={searchIcon} alt="Search" />
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
