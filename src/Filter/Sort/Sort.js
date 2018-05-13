import React from 'react';

import items from './config';

import { Select, SelectMobile, Wrapper, WrapperMobile } from './styled';

const options = (
  <React.Fragment>
    {items.map((item, i) => (
      <option value={i} key={i}>
        {item}
      </option>
    ))}
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
      <label htmlFor="sort">Sort by </label>
      <Select id="sort" onChange={handleSort} value={sortIdx}>
        {options}
      </Select>
    </Wrapper>
  );
};

export default Sort;
