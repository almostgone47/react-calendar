import React from "react"
import AppointmentForm from './AppointmentForm'
import update from 'immutability-helper'
import AppointmentList from "./AppointmentList";
import PropTypes from "prop-types"

class Appointments extends React.Component {
  
  state = {
    appointments: this.props.appointments,
    title: '',
    apt_time: ''
  }

  handleFormSubmit = () => {
    const appointment = {title: this.state.title, apt_time: this.state.apt_time }
    $.post("/appointments", {appointment: appointment})
    .done((data) => {
      this.addNewAppointment(data)
    })
  }

  addNewAppointment = (appointment) => {
    const appointments = update(this.state.appointments, { $push: [appointment]})
    this.setState({ 
      appointments: appointments.sort((a, b) => {
        return new Date(a.apt_time) - new Date(b.apt_time)
      }) 
    })
  }

  handleUserInput = (obj) => {
    this.setState(obj)
  }
  
  render () {
    return (
    <div>
      <AppointmentForm 
        title={this.state.title} 
        apt_time={this.state.apt_time}
        onUserInput={this.handleUserInput}
        onFormSubmit={this.handleFormSubmit} />
      <AppointmentList
        appointments={this.state.appointments} />
      </div>
    )
  }
}

export default Appointments
