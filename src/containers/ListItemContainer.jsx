import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from "../components/ListItem";

export default class ListItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catched: false
    };
    this.handleCatch = this.handleCatch.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    fetch(`http://localhost:3004/caught_pokemons/${id}`)
    .then((response) => response.ok ? this.setState({catched: true}) : '');
  }

  handleCatch = () => {
    const { id, post, name } = this.props;
    const dateFormat = require('dateformat');
    const date = dateFormat(new Date(), "mmmm dS, yyyy");
    
    fetch(`http://localhost:3004/caught_pokemons`, {
      method: "post",
      body: JSON.stringify({name, id}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((result) => {
      this.setState({
        catched: true
      })
    })

    fetch(`http://localhost:3004/pokemons/${id}`, {
      method: "put",
      body: JSON.stringify({
        name,
        id,
        catched: true,
        date: date
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((result) => {
      this.setState({
        catched: true
      })
    })
  }

  render() {    
    const { id,name } = this.props;
    return (
      <ListItem 
        id={id} 
        title={name} 
        catched={this.state.catched} 
        handleCatch={this.handleCatch}
      />
    );
  }
}