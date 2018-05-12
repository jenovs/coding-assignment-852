import styled from 'styled-components';

import { BREAK_LG } from '../variables/media';

export const Banner = styled.div`
  align-items: center;
  background-color: #409CD1
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  height: 51px;
  margin-bottom: 9px;
  padding-left: 30px;
`;

export const DateFilter = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 47px;
  padding-left: 40px;
  padding-top: 18px;
  margin-bottom: 10px;

  @media ${BREAK_LG} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Durations = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 103px;
  padding-top: 17px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const Preset = styled.div`
  align-items: center;
  color: ${p => (p.active ? '#409CD1' : '#333')};
  font-weight: ${p => (p.active ? 600 : 400)};
  height: 17px;
  display: flex;
  margin-bottom: 11px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Presets = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 15px;
  margin-left: 30px;
  margin-top: 13px;
  min-height: 129px;
`;

export const Title = styled.p`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
`;

export const Title2 = styled(Title)`
  margin-bottom: 13px;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  @media ${BREAK_LG} {
    margin: 16px;
    width: 260px;
  }
`;
