import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import Counter from './components/Counter';
import PostsListContainer from './containers/PostsListContainer.jsx';
import routes from './routes';
import PokemonInfo from './containers/PokemonInfo.jsx';
import PokemonsCaughtList from './containers/PokemonsCaughtList.jsx';
import Header from "./components/Header";

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {

	render(){
		return(
	    <div className="pokemons">
	    {/* <Post title = "My title" description = "Description" /> */}
	    <BrowserRouter>
        <Switch>
          {/*routes.map(item => <Route key={item} {...item} />)*/}
        	<Route exact path='/' component={PostsListContainer}/>
      		<Route exact path='/counter/:img/' component={PokemonInfo}/>
      		<Route exact path='/caught_pokemons' component={PokemonsCaughtList}/>
        </Switch>
      </BrowserRouter>
	    </div>
	  );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));