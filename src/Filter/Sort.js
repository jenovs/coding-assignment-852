import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 43px;
  justify-content: center;
  margin-right: 32px;
  margin-top: 16px;
  width: 200px;
`;

const Select = styled.select`
  border: none;
  background-color: #fff;
  color: #333;
  font-size: 12px;
  height: 100%;
  margin-left: 10px;
  padding-left: 10px;
  width: 130px;
`;

const Sort = ({ handleSort, sortIdx }) => (
  <Wrapper>
    Sort by{' '}
    <Select onChange={handleSort} value={sortIdx}>
      <option value={0}>Default</option>
      <option value={1}>Min. price</option>
    </Select>
  </Wrapper>
);

export default Sort;
