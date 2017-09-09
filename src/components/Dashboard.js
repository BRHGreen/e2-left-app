import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Dashboard extends Component {
  render () {
    return (
      <div>
        <BigCalendar
          events={['things', 'other things', 'thiingsss']}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    )
  }
}

export default Dashboard
