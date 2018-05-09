import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
  color: #333;
  font-size: 12px;
  line-height: 20px;
`;

const Title = styled.div`
  color: #999;
  font-size: 10px;
  height: 18px;
  line-height: 18px;
  text-transform: uppercase;
  width: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 6px;
`;

const DetailLine = ({ title, details }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Details>{details}</Details>
  </Wrapper>
);

export default DetailLine;
