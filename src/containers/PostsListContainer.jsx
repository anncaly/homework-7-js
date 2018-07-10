import React, {Component, Fragment} from 'react';
import Post from "../components/Post";
import PostsList from "../components/PostsList";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

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

	  fetch('http://localhost:3004/pokemons?_limit=18&_page='+page)
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
				{posts.map(post => <PostsList key = {post.id} title = {post.name} img = {post.id}/>)}
				<button onClick={this.loadPosts}>load more</button>
			</Fragment>
		)
	}

}