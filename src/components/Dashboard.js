import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

/*
JS dates: The month is zero indexed the day is not. Default order is YY/MM/DD
*/
const events = [
  {
  'title': 'All Day Event',
  'allDay': true,
  'start': new Date(2017, 9, 5),
  'end': new Date(2017, 9, 5)
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
        />
      </div>
    )
  }
}

export default Dashboard
