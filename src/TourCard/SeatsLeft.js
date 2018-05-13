import React from 'react';
import styled from 'styled-components';

const Datum = styled.div``;

const Seats = styled.div`
  color: ${p => (p.danger ? '#E74C3C' : 'inherit')};
`;

const Wrapper = styled.div`
  color: #333;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  line-height: 20px;
  margin: 0 20px;
`;

const SeatsLeft = ({ date, seats }) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString('en-us', {
    month: 'short',
  });

  return (
    <Wrapper>
      <Datum>
        {day} {month}
      </Datum>
      <Seats danger={seats < 5}>
        {seats} seat{seats === 1 ? '' : 's'} left
      </Seats>
    </Wrapper>
  );
};

export default SeatsLeft;
