import React, { Component } from 'react';
import styled from 'styled-components';
import { Progress, Tooltip } from 'antd';

const challenger = require('../assets/challenger.png');
const grandMaster = require('../assets/grandmaster.png');
const master = require('../assets/master.png');
const diamond = require('../assets/diamond.png');
const platinum = require('../assets/platinum.png');
const gold = require('../assets/gold.png');
const silver = require('../assets/silver.png');
const bronze = require('../assets/bronze.png');
const unranked = require('../assets/unranked.png');

const Card = styled.div`
  display: flex;
  background-color: #fff;
  width: 80%;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  margin: 1.5rem auto;
  min-width: 320px;
`;

const TierImage = styled.img`
  height: auto;
  width: auto;
  max-width: 50%;
`;

const Information = styled.div`
  flex: 2;
  flex-direction: column;
  display: flex;
  margin: 0.5em;
  padding: 0.5em;
`;

const UserName = styled.p`
  font-family: 'Lato', sans-serif;
  margin: 10px 2px;
  font-size: 2.5vw;
`;

const Score = styled.p`
  font-size: 1.5vw;
  font-family: 'Roboto', sans-serif;
`;

const WinRatio = styled.div``;

const Description = styled.div``;

const TierInfo = styled.div`
  flex: 0.7;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;

class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  chooseTier(tier) {
    switch (tier) {
      case 'challenger':
        return challenger;
      case 'grandMaster':
        return grandMaster;
      case 'master':
        return master;
      case 'diamond':
        return diamond;
      case 'platinum':
        return platinum;
      case 'gold':
        return gold;
      case 'silver':
        return silver;
      case 'bronze':
        return bronze;
      default:
        return unranked;
    }
  }

  colors = {
    challenger: {
      from: '#166CF8',
      to: '#FDF2E0',
    },
    grandMaster: {
      from: '#D11B21',
      to: '#0B070A',
    },
    master: {
      from: '#D028E1',
      to: '#130516',
    },
    diamond: {
      from: '#303054',
      to: '#E7CEF8',
    },
    platinum: {
      from: '#174A51',
      to: '#759895',
    },
    gold: {
      from: '#A86B29',
      to: '#EEBF65',
    },
    silver: {
      from: '#2A3435',
      to: '#ABB4B7',
    },
    bronze: {
      from: '#4E271A',
      to: '#C8A98C',
    },
  };

  render() {
    const username = this.props.player.username;
    const score = this.props.player.score;
    const wins = this.props.player.wins;
    const losses = this.props.player.losses;
    const progress = this.props.player.score || 0;
    const winRatio = (
      (this.props.player.wins /
        (this.props.player.wins + this.props.player.losses)) *
      100
    ).toPrecision(2);
    return (
      <Card>
        <TierInfo>
          <TierImage
            src={this.chooseTier(this.props.player.tier)}
            alt={'hello'}
          />
          <Description>
            {' '}
            {this.props.player.tier} {this.props.player.division}{' '}
          </Description>
        </TierInfo>
        <Information>
          <UserName>{username} </UserName>
          <Score>
            {wins}/{losses}
          </Score>
          <Progress
            percent={progress}
            strokeWidth={10}
            status="active"
            strokeColor={this.colors[this.props.player.tier]}
            showInfo={true}
            format={percent => {
              return percent + ' LP';
            }}
          />
        </Information>
      </Card>
    );
  }
}

export default PlayerCard;
