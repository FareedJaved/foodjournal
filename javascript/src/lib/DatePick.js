import React, { Component } from "react";
import DatePicker from "react-datepicker";

class DatePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = e => {
    console.log(e);
    this.setState({
      startDate: e
    });
  };

  render() {
    return (
      <div>
        <h3>Select the date and time you ate something.</h3>
        <DatePicker
          selected={this.state.startDate}
          onChange={e => {
            this.handleChange(e);
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
      </div>
    );
  }
}

export default DatePick;
