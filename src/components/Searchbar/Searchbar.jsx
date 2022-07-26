import { Component } from 'react';

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
      <header>
        <form onSubmit={this.handlerSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
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
