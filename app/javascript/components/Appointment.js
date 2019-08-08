import React, {Fragment} from "react"
import Moment from 'react-moment'
import PropTypes from "prop-types"

class Appointment extends React.Component {
  render () {
    return (
      <Fragment>
          <div 
            key={this.props.appointment.id}
            className="appointment">
            <h3>{this.props.appointment.title}</h3>
            <Moment fromNow>{this.props.appointment.apt_time}</Moment>
          </div>
      </Fragment>
    );
  }
}

export default Appointment
