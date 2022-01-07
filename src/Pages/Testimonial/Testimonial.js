import { Container, Grid, Paper, Typography } from "@mui/material";

import React from "react";
import people1 from "../../images/people-1.png";
import people2 from "../../images/people-2.png";
import people3 from "../../images/people-3.png";

const Testimonial = () => {
	return (
		<Container
			sx={{ width: "100%", marginTop: "50px", marginBottom: "50px" }}
		>
			<div style={{ textAlign: "start", marginBottom: "50px" }}>
				<Typography sx={{ color: "#33FFE2" }} variant="h6">
					Testimonial
				</Typography>
				<Typography variant="h3">What's Our Patients Says</Typography>
			</div>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6} md={4}>
					<Paper style={{ padding: "20px" }} elevation={3}>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Incidunt laborum, laboriosam quod maiores id dolor. Quia
							cum repellat accusantium, eum molestias perspiciatis totam
							ad modi id, natus consectetur unde porro!
						</Typography>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: "25px",
							}}
						>
							<img src={people3} alt="" />
							<div style={{ textAlign: "center" }}>
								<Typography
									sx={{ px: 3, color: "#ff7961" }}
									variant="h6"
								>
									Alex Ariyan
								</Typography>
								<Typography variant="body2">Texas</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={6} md={4}>
					<Paper style={{ padding: "20px" }} elevation={3}>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Incidunt laborum, laboriosam quod maiores id dolor. Quia
							cum repellat accusantium, eum molestias perspiciatis totam
							ad modi id, natus consectetur unde porro!
						</Typography>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: "25px",
							}}
						>
							<img src={people2} alt="" />
							<div>
								<Typography
									sx={{ px: 3, color: "#ff7961" }}
									variant="h6"
								>
									Emma Watson
								</Typography>
								<Typography variant="body2">HollyWood</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={6} md={4}>
					<Paper style={{ padding: "20px" }} elevation={3}>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Incidunt laborum, laboriosam quod maiores id dolor. Quia
							cum repellat accusantium, eum molestias perspiciatis totam
							ad modi id, natus consectetur unde porro!
						</Typography>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: "25px",
							}}
						>
							<img src={people1} alt="" />
							<div>
								<Typography
									sx={{ px: 3, color: "#ff7961" }}
									variant="h6"
								>
									Winson Herry
								</Typography>
								<Typography variant="body2">California</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Testimonial;
