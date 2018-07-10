import React, {Component} from 'react';
import ListItem from "../ListItem";

export default class PostsList extends Component {
  render() {
    const {post, title, img, date} = this.props;
    return (
    	<ListItem id={img} title={title} post={post} date={date} />
    );
  }
}