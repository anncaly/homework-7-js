import React, {Component, Fragment} from 'react';
import Info from "../components/Info";

export default class PokemonInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		  id: props.match.params.img,
		  post: []
		};
	}

	componentDidMount() {
		const {id} = this.state;
	  fetch('http://localhost:3004/pokemons/'+id)
	  	.then(response => response.json())
			.then(post => {
	      this.setState({post});
	  })
	}

  render() {
		const {id, name, post} = this.state;
		return(
			<Fragment>
				<Info key = {post.id} title = {post.name} img = {post.id} date = {post.date} />
			</Fragment>
		)
	}
}