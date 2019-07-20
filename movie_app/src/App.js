import React, { Component } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

class App extends Component {
  state = {
    people: [
      {
        id: 2,
        name: '장홍준',
        username: 'hongjun7',
        tier: 'diamond',
        division: 4,
        wins: 223,
        losses: 200,
        score: 14,
      },
      {
        id: 1,
        name: '김형우',
        username: 'erickim713',
        tier: 'gold',
        division: 3,
        wins: 154,
        losses: 158,
        score: 37,
      },
      {
        id: 3,
        name: '성기영',
        username: 'SungX',
        tier: 'unranked',
        division: undefined,
        wins: 0,
        losses: 0,
        score: 0,
      },
      {
        id: 4,
        name: '박예찬',
        username: 'Jeju Riven',
        tier: 'silver',
        division: 1,
        wins: 54,
        losses: 34,
        score: 42
      },
      {
        id: 5,
        name: '김태훈',
        username: '애송이사이호랑이',
        tier: 'gold',
        division: 4,
        wins: 84,
        losses: 102,
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
        <Wrapper>
          {this.state.people.map(player => {
            return (
              <PlayerCard
                player={player}
                key={player.id}
              />
            );
          })}
        </Wrapper>
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
