import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const events = [
  {
  'title': 'All Day Event',
  'allDay': true,
  'start': new Date(2017, 8, 0),
  'end': new Date(2017, 8, 1)
}
]

class Dashboard extends Component {
  render () {
    console.log('this.props: ', this.props);
    return (
      <div>
        <BigCalendar
          {...this.props}
        events={events}
        views={allViews}
        defaultDate={new Date(2017, 8, 1)}
        />
      </div>
    )
  }
}

export default Dashboard
