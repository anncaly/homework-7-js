import React, {Component, Fragment} from 'react';

export default class Counter extends Component {

  render() {
    const {post,  handleCatch} = this.props;
    return (
      <div>
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
      </div>
    );
  }

}