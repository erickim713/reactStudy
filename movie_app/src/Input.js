import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: ''
    }
    this.addToDo = this.addToDo.bind(this);
  }



  addToDo = (e) => {
    console.log(this.state.todoTitle)
    console.log(this.props)
    this.props.addTodo(this.state)

  }

  handleChange = (e) => {
    this.setState({
      todoTitle: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input
          type="text"
          size="10"
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={this.addToDo}
        > Add to TodoList </button>
      </div>
    )
  }
}

export default InputField;