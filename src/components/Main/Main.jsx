import React, {Component} from 'react';
import './Main.css';
import {Link} from 'react-router-dom';

export default class Main extends Component{
  render(){
    return(
      <div className="main">
        <h1>Pokedex App</h1>
        <h2>Catch pokemons and have fun</h2>
        <p>Go to the <Link to={'/all_pokemons'}>Pokemons</Link></p>
      </div>
    )
  }
}