import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const diamond = require('../assets/diamond.png');
const platinum = require('../assets/platinum.png');
const gold = require('../assets/gold.png');
const silver = require('../assets/silver.png');
const unranked = require('../assets/unranked.png');

const Card = styled.div`
  display: flex;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
  min-width: 320px;
`;

const TierImage = styled.img`
  height: 20%;
  width: 20%;
  padding: 12px 10px;

`;

const Information = styled.div`
  flex: auto;
`;

const UserName = styled.p`
  font-family: 'Lato', sans-serif;
  margin: 10px 2px;
`;

const Score = styled.p`
  font-family: 'Roboto', sans-serif;
`;

const ProgressBar = styled.div`
  width: 100%;
`

class PlayerCard extends Component {
  chooseTier(tier) {
    switch (tier) {
      case 'diamond':
        return diamond;
      case 'platinum':
        return platinum;
      case 'gold':
        return gold;
      case 'silver':
        return silver;
      default:
        return unranked;
    }
  }

// div {
//     background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
//                 radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
// } gold gradient


  render() {
    const username = this.props.username;
    const score = this.props.score;
    console.log(this.chooseTier());
    return (
      <Card>
        <TierImage src={this.chooseTier(this.props.tier)} alt={'hello'} />
        <Information>
          <UserName>{username} </UserName>
          <Score>{score}</Score>
          <ProgressBar> </ProgressBar>
        </Information>
      </Card>
    );
  }
}

export default PlayerCard;
