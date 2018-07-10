import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from "../Counter";

export default class CaughtList extends Component {

  render() {
    const {posts, title, description, img} = this.props;
        console.log(img);
    return (
      <div className="post">
        <Link to={`/counter/${img}`}>
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