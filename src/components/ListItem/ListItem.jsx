import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListItem extends Component {
  render() {
    const { title, id, handleCatch, catched } = this.props;
    return(
      <div className="post">
        <Link to={`/pokemon/${id}`}>
          <img
            src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`}
            width="100"
            height="100"
            alt={title}
          />
        </Link>
        <h3>{title}</h3>
        <button className="catch" onClick={handleCatch} disabled={catched}>Catch!</button>
      </div>  
    );
  }
}