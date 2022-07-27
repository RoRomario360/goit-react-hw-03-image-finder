import { Component } from 'react';
import s from './SearchBar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handlerInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handlerSubmit}>
          <button className={s.button} type="submit">
            <span>Search</span>
          </button>

          <input
            className={s.input}
            onChange={this.handlerInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={query}
          />
        </form>
      </header>
    );
  }
}
