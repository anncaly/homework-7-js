import React, {Component, Fragment} from 'react';
import CaughtList from "../components/CaughtList";
import Header from "../components/Header";

export default class PostsListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			page: 1
		};
	}

	loadPosts = () => {
		const {page, posts} = this.state;

	  fetch('http://localhost:3004/caught_pokemons?_limit=18&_page='+page)
	  	.then(response => response.json())
			.then((result) => {
				this.setState({
					posts: posts.concat(result),
					page: page + 1
			})
		})
	}
	
	componentDidMount(){
	  this.loadPosts();
	}

  render() {
		const {posts} = this.state;
		
		return(
			<Fragment>
				<Header />
				{posts.map(post => <CaughtList key = {post.id} title = {post.name} img = {post.id}/>)}
				<div className="btn">
					<button className="load" onClick={this.loadPosts}>load more</button>
				</div>
			</Fragment>
		)
	}
}