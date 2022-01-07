import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "../../../Appointment/Booking/Booking";

const bookings = [
	{
		id: 1,
		name: "Teeth Orthodontics",
		time: "8.00 AM - 9.00 AM",
		space: 5,
	},
	{
		id: 2,
		name: "Cosmetic Dentistry",
		time: "9.00 AM - 10.00 AM",
		space: 10,
	},
	{
		id: 3,
		name: "Teeth Cleaning",
		time: "10.00 AM - 11.00 AM",
		space: 15,
	},
	{
		id: 4,
		name: "Cavity Protection",
		time: "11.00 AM - 12.00 PM",
		space: 25,
	},
	{
		id: 5,
		name: "Pediatric Dental",
		time: "6.00 PM - 7.00 PM",
		space: 15,
	},
	{
		id: 6,
		name: "Oral Surgery",
		time: "7.00 AM - 8.00 PM",
		space: 20,
	},
];

const AvailableAppointment = ({ date }) => {
	return (
		<Container style={{ width: "80%", margin: "0 auto" }}>
			<h2
				style={{
					color: "green",
					borderRadius: "10px",
					backgroundColor: "aqua",
					padding: "10px",
					fontWeight: 500,
				}}
			>
				Available Appointment on{" "}
				<span style={{ color: "royalblue", fontWeight: 700 }}>
					{date.toDateString()}
				</span>
			</h2>
			<Grid container spacing={2}>
				{bookings.map((booking) => (
					<Booking
						key={booking.id}
						booking={booking}
						date={date}
					></Booking>
				))}
			</Grid>
		</Container>
	);
};

export default AvailableAppointment;
