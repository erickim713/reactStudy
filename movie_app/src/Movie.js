import React, { Component } from 'react';

class TodoCard extends Component {
  state = {
    done: false,
    id: this.props.id,
    title: this.props.title
  }
  componentWillMount() {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1> {this.state.id} </h1>
        <h2> {this.state.title} </h2>
      </div>
    )
  }
}

export default TodoCard;