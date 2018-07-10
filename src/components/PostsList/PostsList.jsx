import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from "../Counter";

export default class PostsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catched: false
    };
    this.handleCatch = this.handleCatch.bind(this);
    console.log(this.handleCatch);
  }


  handleCatch() {
    const {title, img} = this.state;
    this.setState({
      catched: true
    })
    fetch(`http://localhost:3004/caught_pokemons`, {
      method: "post",
      body: JSON.stringify({
        name: this.props.title,
        id: this.props.img,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      });
  console.log('catched');
  }

  render() {
    const {posts, title, description, img} = this.props;
    console.log(this.props.catched);
    return (
      <div className="post">
        <Link to={`/counter/${img}`}>
          <img
          src={`http://localhost:8080/pokemons/${img}.png`}
          width='100'
          height='100'
          />
        </Link>
        <h3>{title}</h3>
        <button onClick = {this.handleCatch}>Catch</button>
      </div>
    );
  }
}