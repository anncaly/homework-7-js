import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class ListItem extends Component {

constructor(props) {
    super(props);
    this.state = {
      catched: false
    };
    this.handleCatch = this.handleCatch.bind(this);
  }

  handleCatch() {
    const {id} = this.props;
    const {post} = this.props;
    const date = this.formatDate(new Date());
    fetch(`http://localhost:3004/caught_pokemons`, {
      method: "post",
      body: JSON.stringify({
        name: this.props.title,
        id: id
      }),
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
        name: this.props.title,
        id: this.props.img,
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

  componentWillMount() {
    const {id} = this.props;
    fetch(`http://localhost:3004/caught_pokemons/${id}`)
    .then((response) => response.ok ? this.setState({catched: true}) : '');
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    const {post, img, title, catched, handleCatch} = this.props;
    return (
      <div className="post">
        <Link to={`/pokemon/${this.props.id}`}>
        <img
        src={`http://localhost:8080/pokemons/${this.props.id}.png`}
        width='100'
        height='100'
        />
        </Link>
        <h3>{title}</h3>
        <button className="catch" onClick = {this.handleCatch} disabled={this.state.catched}>Catch!</button>
      </div>  
    );
  }
}