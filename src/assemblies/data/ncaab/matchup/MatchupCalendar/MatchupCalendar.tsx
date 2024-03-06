import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from 'react-bootstrap-icons';
import 'react-datepicker/dist/react-datepicker.css';

export type MatchupCalendarProps = {
  onDateSelect: (date: string) => void;
};

const MatchupCalendar: FC<MatchupCalendarProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateSelect(date ? date.toLocaleDateString('en-US') : ''); // Format the date to include only the year
  };

  return (
    <div className="d-flex align-items-center">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        customInput={
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ backgroundColor: 'transparent' }} // Set the initial background color
          >
            <Calendar style={{ marginRight: '5px' }} />
          </button>
        }
      />
    </div>
  );
};

export default MatchupCalendar;
