import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 14px;
  height: 34px;
  width: 261px;
`;

class DatePicker extends React.Component {
  state = {
    inputType: 'text',
  };

  datePicker = React.createRef();

  handleDatePick = () => {
    const value = this.datePicker.current.value;
    const { handleDatePick } = this.props;
    const currentDate = new Date().toISOString().split('T')[0];

    if (!value) {
      return handleDatePick({
        fromDate: new Date(0, 0),
        toDate: new Date(9999, 0),
        activePreset: -1,
      });
    }

    if (value < currentDate) {
      this.datePicker.current.value = '';
      return alert(`You can't travel to the past :(`);
    }

    const date = new Date(value);

    handleDatePick({
      fromDate: date,
      toDate: date,
      activePreset: -1,
    });
  };

  render() {
    const { inputType } = this.state;

    return (
      <Input
        type={inputType}
        innerRef={this.datePicker}
        onMouseOver={() => this.setState({ inputType: 'date' })}
        onMouseOut={() => this.setState({ inputType: 'text' })}
        onChange={this.handleDatePick}
        placeholder="Select a specific date"
      />
    );
  }
}

export default DatePicker;
