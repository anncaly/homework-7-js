import React, {Component} from 'react';
import './Post.css';

export default class Post extends Component {

  render() {
    const {title, img} = this.props;
    return(
      <div className="pokemon_info">
      	<div className="details">
        <img
				src={`http://localhost:8080/pokemons/${img}.png`}
				width='100'
				height='100'
				/>
				<h3>{title}</h3>
      </div>
    </div>
    )
  }
}