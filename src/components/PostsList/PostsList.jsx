import React, { Component, Fragment } from 'react';
import ListItemContainer from "../../containers/ListItemContainer.jsx";
import Header from "../Header";

export default class PostsList extends Component {
  render() {
    const { posts, title, id, load } = this.props;
    return(
      <Fragment>
        <Header />
      	{posts.map((post) => 
          <ListItemContainer 
            key={post.id} 
            name={post.name} 
            id={post.id} 
          />
        )}
        <button className="load" onClick={load}>load more</button>
      </Fragment>
    );
  }
}




