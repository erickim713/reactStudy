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
  height: 10%;
  width: 10%;
  padding: 12px 10px;

`;

const Information = styled.div`
  flex: auto;
  display: flex;
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

const GeneralInfo = styled.div`
  flex: 1;
`;

const WinRatio = styled.div`

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

  render() {
    const username = this.props.player.username;
    const score = this.props.player.score;
    const progress = this.props.player.score || 0;
    const winRatio = (this.props.player.wins/(this.props.player.wins + this.props.player.losses) * 100).toPrecision(2);
    return (
      <Card>
        <TierImage src={this.chooseTier(this.props.player.tier)} alt={'hello'} />
        <Information>
        <GeneralInfo>
          <UserName>{username} </UserName>
          <Score>{score}</Score>
          <Progress percent={progress} status="active" showInfo={true} />
        </GeneralInfo>
        <WinRatio>
          <Tooltip title='3 done / 3 in progress / 4 to do'>
            <Progress percent={100} successPercent={isNaN(winRatio) ? 0 : winRatio} strokeColor="red" type="circle" />
          </Tooltip>
        </WinRatio>
        </Information>
      </Card>
    );
  }
}

export default PlayerCard;
