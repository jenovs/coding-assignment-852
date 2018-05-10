import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  background-color: #fff;
  color: #409cd1;
  display: flex;
  font-size: 12px;
  height: 43px;
  justify-content: center;
  margin-bottom: 20px;
`;

const Select = styled.select`
  border: none;
  background-color: #fff;
  color: #409cd1;
`;

const Sort = ({ handleSort }) => (
  <Wrapper>
    Sort by:{' '}
    <Select onChange={handleSort}>
      <option>Default</option>
      <option>Min. price</option>
    </Select>
  </Wrapper>
);

export default Sort;
