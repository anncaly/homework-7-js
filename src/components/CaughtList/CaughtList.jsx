import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CaughtList extends Component {
  render() {
    const {posts, title, description, img} = this.props;
    return (
      <div className="post">
        <Link to={`/pokemon/${img}`}>
          <img
          src={`http://localhost:8080/pokemons/${img}.png`}
          width='100'
          height='100'
          />
        </Link>
        <h3>{title}</h3>
      </div>
    );
  }
}