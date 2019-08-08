import React from "react"
import Appointment from './Appointment'
import PropTypes from "prop-types"

class AppointmentList extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.appointments.map((appointment) => {
          return (
            <Appointment 
              appointment={appointment}
              key={appointment.id} />
          )
        })};
      </React.Fragment>
    );
  }
}

export default AppointmentList
