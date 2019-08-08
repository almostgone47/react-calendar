import React from "react"
import * as Datetime from 'react-datetime'
import './AppointmentForm.css'
import PropTypes from "prop-types"


class AppointmentForm extends React.Component {
  
  handleChange = (e) => {
    const name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj)
  }

  setAptTime = (e) => {
    var name = 'apt_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
         this.props.onUserInput(obj);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render () {
    const inputProps = {
      name: 'apt_time'
    }

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit} >
          <input 
            name="title" 
            placeholder="Appoinment title"
            onChange={this.handleChange} />
          <Datetime 
            closeOnSelect={true}
            input={false} 
            open={false} 
            inputProps={inputProps}
            value={this.props.apt_time}
            onChange={this.setAptTime} />
          <input 
            type="submit"
            value="Make Appointment"
            className="submit-btn" />
        </form>
      </div>
    )
  }
}

export default AppointmentForm
