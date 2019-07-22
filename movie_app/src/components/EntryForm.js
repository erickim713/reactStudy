import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';


const FormWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  background: #f2f2f2;
`;

const Title = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 3vw;
  color: #333;
`;

const FormCard = styled.div`
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    width: 90vw;
    max-width: 650px;
    padding: 77px 55px 33px;
    margin-top: 5vh;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    padding: 40px;
    background: white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
`;

class EntryForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormWrapper>
        <FormCard placeholder="Basic usage">
          <Title>방 이름 적으시오</Title>
          <Input placeholder="testing"/>
        </FormCard>
      </FormWrapper>
    );
  }
}

export default EntryForm;
