import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const startDate = moment().subtract(30, 'days').startOf('day');
const endDate = moment().endOf('day');

export class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate,
            endDate,
        };
    }

    render() {
        return (
            <React.Fragment>
                <DateRangePicker
                    startDateId={'start-date'}
                    endDateId={'end-date'}
                    startDate={this.props?.startDate ? moment(this.props?.startDate) : ""}
                    endDate={this.props?.endDate ? moment(this.props?.endDate) : ""}
                    onDatesChange={({ startDate, endDate }) => {
                        this.setState({ startDate, endDate });
                        this.props.setStartDate(startDate?._d);
                        this.props.setEndDate(endDate?._d);
                    }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    hideKeyboardShortcutsPanel
                    isOutsideRange={() => false}
                />
            </React.Fragment>
        )
    }
}

export default DatePicker;


