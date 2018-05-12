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

const Sort = ({ handleSort, sortIdx }) => (
  <Wrapper>
    Sort by:{' '}
    <Select onChange={handleSort} value={sortIdx}>
      <option value={0}>Default</option>
      <option value={1}>Min. price</option>
    </Select>
  </Wrapper>
);

export default Sort;
