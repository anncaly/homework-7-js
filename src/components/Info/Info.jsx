import React, {Component, Fragment} from 'react';
import './Info.css';
import Header from "../Header";

export default class Info extends Component {
  render() {
    const {title, img, date} = this.props;
    return(
      <Fragment>
      <Header />
      <div className="pokemon_info">
      	<div className="details">
          <div className="details_img">
            <img
    				src={`http://localhost:8080/pokemons/${img}.png`}
    				width='100'
    				height='100'
    				/>
          </div>
          <div className="details_info">
            <p>ID: {img}</p>
            <h3>{title}</h3>
    				<p>{date}</p>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}