import React, { Component } from 'react';
import './App.css';
import TodoCard from './Movie';
import InputField from './Input';

class App extends Component {

  state = {
    todoList: [
      {
        "id": 1,
        "title": "SPA 개념"
      },
      {
        "id": 2,
        "title": "Node.js 알아보기"
      },
      {
        "id": 3,
        "title": "React.js 맛보기"
      },
      {
        "id": 4,
        "title": "React.js 사용하는 방법"
      }
    ]
  }

  addTodo = (_State) => {
    console.log('app: addTodo => ', _State);
    let currentList = this.state.todoList;
    console.log(currentList);
    currentList.push({
      id: currentList.length + 1,
      title: _State.todoTitle
    })
    console.log('after being updated ', currentList )
    this.setState({todoList: currentList})
  }



  render() {
    return (
      <div className="App">
        {
          this.state.todoList.map(
            (todoElement, index) => {
              return <TodoCard title={todoElement.title} key={index} id={todoElement.id} />
            })
        }

        <InputField addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
