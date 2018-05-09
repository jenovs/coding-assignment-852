import React from 'react';
import styled from 'styled-components';

const Icon = styled.span`
  color: #41c4ab;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 18px;
  line-height: 23px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 23px;
`;

const Wrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  align-items: flex-end;
  color: #333;
  display: flex;
  flex-direction: column;
  height: 101px;
  justify-content: flex-end;
  padding-bottom: 30px;
`;

const PriceBox = ({ price }) => (
  <Wrapper>
    <Title>Total price</Title>
    <Price>
      &euro;{price} <Icon>&#9969;</Icon>
    </Price>
  </Wrapper>
);

export default PriceBox;
