import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: ''
    }
    this.addToDo = this.addToDo.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput = () => {
    this.setState({todoTitle: ''})
  }

  addToDo = (e) => {
    this.props.addTodo(this.state)

  }

  handleChange = (e) => {
    this.setState({
      todoTitle: e.target.value
    })
  }

  _onKeyDown = (e) => {
    if(e.keyCode === 13) {
      this.addToDo();
      this.clearInput();
    }
  }

  render () {
    return (
      <div>
        <input
          type="text"
          size="10"
          onChange={this.handleChange}
          onKeyDown={this._onKeyDown}
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