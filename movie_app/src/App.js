import React, { Component } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import styled from 'styled-components';
import EntryForm from './components/EntryForm';

const Wrapper = styled.div``;

class App extends Component {
  state = {
    people: [
      {
        name: '조영제',
        username: 'GUNGHI',
        tier: 'diamond',
        division: 4,
        wins: 144,
        losses: 120,
        score: 60,
      },
      {
        name: '장홍준',
        username: 'hongjun7',
        tier: 'diamond',
        division: 4,
        wins: 223,
        losses: 200,
        score: 14,
      },
      {
        name: '김한준',
        username: '김해 가렌',
        tier: 'gold',
        division: 1,
        wins: 49,
        losses: 49,
        score: 78,
      },
      {
        name: '김형우',
        username: 'erickim713',
        tier: 'gold',
        division: 3,
        wins: 154,
        losses: 158,
        score: 37,
      },
      {
        name: '용머머',
        username: '아이디와비밀번호',
        tier: 'gold',
        division: 4,
        wins: 147,
        losses: 137,
        score: 18,
      },
      {
        name: '임연재',
        username: 'Be Calm Official',
        tier: 'silver',
        division: 1,
        wins: 84,
        losses: 93,
        score: 0,
      },
      {
        name: '박예찬',
        username: 'Jeju Riven',
        tier: 'silver',
        division: 2,
        wins: 54,
        losses: 34,
        score: 27,
      },
      {
        name: '김태훈',
        username: '애송이사이호랑이',
        tier: 'silver',
        division: 2,
        wins: 45,
        losses: 54,
        score: 45,
      },
      {
        name: '김준성',
        username: '머머리머장',
        tier: 'unranked',
        wins: 0,
        losses: 0,
        score: 0,
      },
      {
        name: '성기영',
        username: 'SungX',
        tier: 'unranked',
        wins: 0,
        losses: 0,
        score: 0,
      },
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
          <EntryForm/>
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
