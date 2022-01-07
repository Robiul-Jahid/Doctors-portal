import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import AppointmentHeader from "../../Home/AppointmentBanner/AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../../Home/AppointmentBanner/AvailableAppointment/AvailableAppointment";

const Appointment = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<div>
			<Navigation></Navigation>
			<AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
			<AvailableAppointment date={date}></AvailableAppointment>
		</div>
	);
};

export default Appointment;
