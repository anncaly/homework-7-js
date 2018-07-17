import React, { Component, Fragment } from 'react';
import PostsList from "../components/PostsList";
import Header from "../components/Header";

export default class PostsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1
    };
  }

  componentDidMount(){
    this.loadPosts();
  }
  
  loadPosts = () => {
    const { page, posts } = this.state;
    fetch(`http://localhost:3004/pokemons?_limit=18&_page=${page}`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          posts: posts.concat(result),
          page: page + 1
      })
    })
  }

  render() {
    const { posts } = this.state;
    return(
      <PostsList 
        posts={this.state.posts} 
        load={this.loadPosts} 
      />
    )
  }
}