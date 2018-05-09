import React from 'react';

import DetailLine from './DetailLine';
import PriceBox from './PriceBox';
import SeatsLeft from './SeatsLeft';

import {
  Button,
  Descr,
  Details,
  H1,
  Heart,
  Image,
  InfoWrapper,
  Ratings,
  Reviews,
  SeatsBox,
  Star,
  Stars,
  Wrapper,
} from './styled';

import starImg from './star.svg';
import hStarImg from './hStar.png';
import heartImg from './heart.svg';

const durations = {
  d: 'days',
};

const getLowestPrice = (data, curr) => {
  return data.reduce((acc, b) => {
    if (b[curr] < acc) {
      acc = b[curr];
    }
    return acc;
  }, Infinity);
};

const renderRating = count => {
  const rem = Boolean(count % 1);
  const res = [];

  for (let i = 0; i < Math.floor(count); i++) {
    res.push(<Star src={starImg} alt="star" key={i} />);
  }

  if (rem) res.push(<img src={hStarImg} alt="half star" key={count + 1} />);
  return res;
};

const TourCard = ({ data }) => {
  const {
    images,
    name,
    length,
    length_type,
    rating,
    reviews,
    description,
    cities,
    operator_name,
  } = data;

  const dates = [...data.dates].sort((a, b) => {
    if (a.start < b.start) return -1;
    if (a.start > b.start) return 1;
    return 0;
  });

  const handleHeartClick = e => {
    if (e.target.tagName === 'IMG') {
      alert('You clicked on the heart :)');
    }
  };

  return (
    <Wrapper>
      <Image url={images[0].url} heart={heartImg}>
        <Heart onClick={handleHeartClick}>
          <img src={heartImg} alt="heart" />
        </Heart>
        <Ratings>
          <Stars>{renderRating(rating)}</Stars>
          <Reviews>{reviews} reviews</Reviews>
        </Ratings>
      </Image>
      <InfoWrapper>
        <H1>
          {name} - {length} {durations[length_type]}
        </H1>
        <Descr>"{description.substring(0, 150)}..."</Descr>
        <Details>
          <DetailLine
            title="Days"
            details={`${length} ${durations[length_type]}`}
          />
          <DetailLine
            title="Destinations"
            details={`${cities.length} cities`}
          />
          <DetailLine
            title="Starts / Ends"
            details={`${cities[0].name} / ${cities[cities.length - 1].name}`}
          />
          <DetailLine title="Operator" details={operator_name} />
        </Details>
        <PriceBox price={getLowestPrice(dates, 'eur')} />
        <SeatsBox>
          <SeatsLeft date={dates[0].start} seats={dates[0].availability} />
          {dates.length > 1 && (
            <SeatsLeft date={dates[1].start} seats={dates[1].availability} />
          )}
        </SeatsBox>
      </InfoWrapper>
      <Button>View More</Button>
    </Wrapper>
  );
};

export default TourCard;
