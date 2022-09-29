import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const date = moment().endOf('day');

export class SingleDatePickerComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date,
        };
    }

    render() {
        return (
            <React.Fragment>
                <SingleDatePicker
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })} 
                    focused={this.state.focused} 
                    onFocusChange={({ focused }) => this.setState({ focused })} 
                    id="your_unique_id" 
                />
            </React.Fragment>
        );
    }
}

export default SingleDatePickerComp;
