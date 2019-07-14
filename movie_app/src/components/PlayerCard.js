import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const diamond = require('../assets/diamond.png');
const platinum = require('../assets/platinum.png');
const gold = require('../assets/gold.png');
const silver = require('../assets/silver.png');
const unranked = require('../assets/unranked.png');

const Card = styled.div`
  height: 120px;
  width: 450px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
`;

const TierImage = styled.img`
  width: 120px;
  height: 80%;
  padding: 12px 10px;
  border-right: 0.5px black solid;
`;

const Information = styled.div`
  display: inline-block;
`;

const UserName = styled.p``;

const Score = styled.p``;

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

  render() {
    const username = this.props.username;
    const score = this.props.score;
    console.log(this.chooseTier());
    return (
      <div>
        <Row>
          <Col span={6}>
            <TierImage src={this.chooseTier(this.props.tier)} alt={'hello'} />
          </Col>
          <Col span={12}>
            <Information>
              <UserName>{username} </UserName>
              <Score>{score}</Score>
            </Information>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PlayerCard;
