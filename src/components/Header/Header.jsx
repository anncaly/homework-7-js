import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component{
  render(){
    return(
      <header>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pokemons">Pockemons</a>
            </li>
            <li>
              <a href="/caught_pokemons">Caught Pockemons</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}