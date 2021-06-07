import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { DayPickerSingleDateController } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './Calendar.sass';


export const earliestDeliveryDate = moment().startOf('day').add(3, 'days');
interface CalendarProps {
    initialDate: Moment | null;
    onChange: (date: Moment | null) => void;
    onCancel: () => void;

}
const Calendar = ({ initialDate, onChange, onCancel }: CalendarProps) => {
    const [selectedDate, setSelectedDate] = useState<Moment | null>(initialDate);

    const isBeforeEarliestDeliveryDate= (day: Moment) => {
        return day.startOf('day') < earliestDeliveryDate
    };

    const handleChange = () => {
        onChange(selectedDate);
    }

    return (
       <div className="calendar" data-automation="calendar">
           {// @ts-ignore - Looks like types may be wrong in DefinitelyTyped, quick hack to make compiler happy
           }<DayPickerSingleDateController date={selectedDate} onDateChange={setSelectedDate} numberOfMonths={1} noNavButtons hideKeyboardShortcutsPanel isOutsideRange={isBeforeEarliestDeliveryDate} />
            <div className="calendar__actions">
                <button type="button" className="calendar__cancel" onClick={onCancel}>Cancel don't change</button>
                <button type="button" className="calendar__change" onClick={handleChange}>Change date</button>
            </div>
       </div>
    );
};

export default Calendar;