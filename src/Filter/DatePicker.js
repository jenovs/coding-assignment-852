import React from 'react';
import styled from 'styled-components';

import { BREAK_LG } from '../variables/media';

const Input = styled.input`
  font-size: 14px;
  height: 34px;
  max-width: 100%;
  width: 261px;

  @media ${BREAK_LG} {
    width: 212px;
  }
`;

class DatePicker extends React.Component {
  state = {
    inputType: 'text',
    value: '',
  };


  handleDatePick = e => {
    const pickValue = e.target.value;
    const { handleDatePick } = this.props;
    const currentDate = new Date().toISOString().split('T')[0];

    if (!pickValue) {
      this.setState(() => ({
        value: '',
      }));

      return handleDatePick({
        fromDate: new Date(0, 0),
        toDate: new Date(9999, 0),
        activePreset: -1,
      });
    }

    if (pickValue < currentDate) {
      this.setState(() => ({ value: '' }));
      return alert(`You can't travel to the past :(`);
    }

    const date = new Date(pickValue);

    this.setState(() => ({
      value: pickValue,
    }));

    handleDatePick({
      fromDate: date,
      toDate: date,
      activePreset: -1,
    });
  };

  render() {
    const { inputType, value } = this.state;

    return (
      <Input
        type={inputType}
        value={value}
        onMouseOver={() => this.setState({ inputType: 'date' })}
        onMouseOut={() => this.setState({ inputType: 'text' })}
        onChange={this.handleDatePick}
        placeholder="Select a specific date"
      />
    );
  }
}

export default DatePicker;
