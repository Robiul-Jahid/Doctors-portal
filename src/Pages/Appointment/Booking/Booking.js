import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
	const { name, time, space } = booking;
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Grid item xs={12} sm={6} md={4} spacing={4}>
				<Paper sx={{ py: 3 }} elevation={3}>
					<Typography
						sx={{ color: "#0FCEEC", fontWeight: 600 }}
						variant="h5"
					>
						{name}
					</Typography>
					<Typography variant="h6">{time}</Typography>
					<Typography variant="caption">
						{space} SPACE AVAILABLE
					</Typography>{" "}
					<br />
					<Button
						onClick={handleOpen}
						sx={{ mt: "10px", backgroundColor: "#0FCEEC" }}
						variant="contained"
					>
						BOOK APPOINTMENT
					</Button>
				</Paper>
			</Grid>
			<BookingModal
				booking={booking}
				handleClose={handleClose}
				open={open}
				date={date}
			></BookingModal>
		</>
	);
};

export default Booking;
