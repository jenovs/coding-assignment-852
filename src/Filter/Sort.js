import React from 'react';
import styled from 'styled-components';

import { mainColor } from '../variables/colors';

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

const WrapperMobile = styled(Wrapper)`
  background-color: #fff;
  border-bottom: 1px solid ${mainColor};
  border-top: 1px solid ${mainColor};
  color: ${mainColor};
  display: flex;
  font-size: 12px;
  height: 43px;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
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

const SelectMobile = styled(Select)`
  color: ${mainColor};
`;

const options = (
  <React.Fragment>
    <option value={0}>Default</option>
    <option value={1}>Min. price</option>
  </React.Fragment>
);

const Sort = ({ handleSort, sortIdx, mobile }) => {
  return mobile ? (
    <WrapperMobile>
      <label htmlFor="sort">Sort by: </label>
      <SelectMobile id="sort" onChange={handleSort} value={sortIdx}>
        {options}
      </SelectMobile>
    </WrapperMobile>
  ) : (
    <Wrapper>
      <label htmlFor="sort">Sort by: </label>
      <Select id="sort" onChange={handleSort} value={sortIdx}>
        {options}
      </Select>
    </Wrapper>
  );
};

export default Sort;
