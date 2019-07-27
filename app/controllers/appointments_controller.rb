class AppointmentsController < ApplicationController
  
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order('apt_time ASC')
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @appointments = Appointment.order('apt_time ASC')
  end

  private
  def appointment_params
    params.require(:appointment).permit(:title, :apt_time)
  end
end
