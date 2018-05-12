import styled from 'styled-components';

import { BREAK_LG } from '../variables/media';

export const Button = styled.button`
  align-self: center;
  background-color: #409cd1;
  border-radius: 1px;
  border: none;
  color: #fff;
  font-size: 14px;
  height: 32px;
  line-height: 18px;
  margin: 20px auto;
  width: 260px;

  &:active {
    background-color: hsla(202, 61%, 50%, 1);
  }

  @media ${BREAK_LG} {
    width: 200px;
  }
`;

export const ButtonInvisible = styled(Button)`
  background-color: transparent;
  color: transparent;
  pointer-events: none;
`;

export const Descr = styled.div`
  font-size: 12px;
  font-style: italic;
  height: 63px;
  line-height: 21px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Heart = styled.div`
  align-items: center;
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Image = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(${p => p.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 320px;
  justify-content: flex-end;
  position: relative;
  width: 100%;

  @media ${BREAK_LG} {
    height: 238px;
    min-width: 238px;
    width: 238px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 22px;

  @media ${BREAK_LG} {
    border-right: 1px solid #f2f2f2;
  }
`;

export const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Reviews = styled.div`
  align-self: flex-end;
  color: #fff;
  font-size: 10px;
  height: 18px;
  line-height: 18px;
  margin-bottom: 6px;
  width: 67px;
`;

export const SeatsBox = styled.div`
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0;
`;

export const Star = styled.img.attrs({
  src: p => p.src,
  alt: p => p.alt,
})`
  display: inline-block;
  height: 15px;
  width: 15px;
`;

export const Stars = styled.div`
  margin: 10px;
`;

export const H1 = styled.h1`
  color: #333;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  height: 22px;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 10px;
  margin-top: 22px;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 1px gray;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
  width: 100%;

  @media ${BREAK_LG} {
    height: 238px;
    flex-direction: row;
    margin: 16px;
    width: auto;
  }
`;
