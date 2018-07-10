import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import ListItem from './components/ListItem';
import PostsListContainer from './containers/PostsListContainer.jsx';
import PokemonInfo from './containers/PokemonInfo.jsx';
import PokemonsCaughtList from './containers/PokemonsCaughtList.jsx';
import Header from "./components/Header";
import Main from "./components/Main";

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {

	render(){
		return(
	    <div className="pokemons">
	    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main}/>
        	<Route exact path='/all_pokemons' component={PostsListContainer}/>
      		<Route exact path='/pokemon/:img/' component={PokemonInfo}/>
      		<Route exact path='/caught_pokemons' component={PokemonsCaughtList}/>
        </Switch>
      </BrowserRouter>
	    </div>
	  );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));