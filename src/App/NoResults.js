import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Wrapper = styled.div`
  align-items: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NoResults = () => (
  <Wrapper>
    <Title>No results for your search criteria</Title>
    <Text>Try clearing your filters to get more results</Text>
  </Wrapper>
);

export default NoResults;
