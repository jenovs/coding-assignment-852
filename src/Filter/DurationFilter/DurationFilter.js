import React from 'react';

import { Button, Input, Wrapper } from './styled';

class DurationFilter extends React.Component {
  state = {
    ...this.props.durations,
  };

  static getDerivedStateFromProps(nextProps) {
    if (
      nextProps.filterDurations.min === nextProps.durations.min &&
      nextProps.filterDurations.max === nextProps.durations.max
    ) {
      return {
        ...nextProps.durations,
      };
    }
    return null;
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { applyDurationFilter } = this.props;
    let { min, max } = this.state;

    applyDurationFilter(min, max);
  };

  render() {
    const { durations } = this.props;
    const { min, max } = this.state;

    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          min ({durations.min}):{' '}
          <Input
            type="number"
            value={min || 0}
            name="min"
            onChange={this.handleChange}
            min={durations.min}
            max={durations.max}
          />max ({durations.max}):{' '}
          <Input
            type="number"
            value={max || 0}
            name="max"
            onChange={this.handleChange}
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
