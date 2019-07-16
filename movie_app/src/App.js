import React, { Component } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';

class App extends Component {
  state = {
    people: [
      {
        id: 2,
        name: '장홍준',
        username: 'hongjun7',
        tier: 'diamond',
        score: 14,
      },
      {
        id: 1,
        name: '김형우',
        username: 'erickim713',
        tier: 'platinum',
        score: 37,
      },
      {
        id: 3,
        name: '성기영',
        username: 'SungX',
        tier: 'gold',
        score: 0,
      },
      {
        id: 4,
        name: '박예찬',
        username: 'Jeju Riven',
        tier: 'silver',
        score: 42
      },
      {
        id: 5,
        name: '브론즈',
        username: '브론즈 태훈잌ㅋ',
        tier: 'bronze',
        score: 80
      }
    ],
  };

  // addTodo = _State => {
  //   console.log('app: addTodo => ', _State);
  //   let currentList = this.state.todoList;
  //   console.log(currentList);
  //   currentList.push({
  //     id: currentList.length + 1,
  //     title: _State.todoTitle,
  //   });
  //   console.log('after being updated ', currentList);
  //   this.setState({ todoList: currentList });
  // };

  render() {
    return (
      <div className="App">
        {this.state.people.map(player => {
          return (
            <PlayerCard
              name={player.name}
              username={player.username}
              score={player.score}
              tier={player.tier}
              key={player.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

// {this.state.todoList.map((todoElement, index) => {
//   return (
//     <TodoCard
//       title={todoElement.title}
//       key={index}
//       id={todoElement.id}
//     />
//   );
// })}

// <InputField addTodo={this.addTodo} />
