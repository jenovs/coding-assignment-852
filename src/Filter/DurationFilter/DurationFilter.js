import React from 'react';

import { Button, Input, Wrapper } from './styled';

class DurationFilter extends React.Component {
  durMin = React.createRef();
  durMax = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { applyDurationFilter, durations } = this.props;

    let min = this.durMin.current.value;
    let max = this.durMax.current.value;

    if (!min) {
      min = durations.min;
      this.durMin.current.value = durations.min;
    }

    if (!max) {
      max = durations.max;
      this.durMax.current.value = durations.max;
    }

    applyDurationFilter(min, max);
  };

  render() {
    const { durations } = this.props;

    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          min ({durations.min}):{' '}
          <Input
            type="number"
            innerRef={this.durMin}
            min={durations.min}
            max={durations.max}
          />max ({durations.max}):{' '}
          <Input
            type="number"
            innerRef={this.durMax}
            min={durations.min}
            max={durations.max}
          />
          <Button type="submit">Apply</Button>
        </form>
      </Wrapper>
    );
  }
}

export default DurationFilter;
