import React, { Component, Fragment } from 'react';
import Header from "../Header";
import './Info.css';

export default class Info extends Component {
  render() {
    const { title, id, date } = this.props;
    return(
      <Fragment>
        <Header />
        <div className="pokemon_info">
        	<div className="details">
            <div className="details_img">
              <img
      				  src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`}
      				  width="100"
      				  height="100"
                alt={title}
      				/>
            </div>
            <div className="details_info">
              <p>ID: {id}</p>
              <h3>{title}</h3>
      				<p>{date}</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}