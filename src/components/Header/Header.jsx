import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{
  render(){
    return(
      <header>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all_pokemons">Pockemons</Link>
            </li>
            <li>
              <Link to="/caught_pokemons">Caught Pockemons</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}