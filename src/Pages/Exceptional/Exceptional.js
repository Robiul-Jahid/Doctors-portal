import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../images/treatment.png";

const Exceptional = () => {
	return (
		<Box
			style={{ margin: "70px 25px", padding: "100px" }}
			sx={{ flexGrow: 1 }}
		>
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={12} md={6}>
					<img
						style={{ width: "70%", marginTop: 50 }}
						src={treatment}
						alt=""
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography
						sx={{
							marginTop: "15%",
							textAlign: "left",
						}}
						variant="h3"
					>
						Exceptional Dental Care, <br /> on Your Terms
					</Typography>
					<Typography
						sx={{ marginTop: "5%", textAlign: "left" }}
						variant="body2"
					>
						{" "}
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Dolorum animi sunt, ad illum impedit numquam odit accusamus
						voluptatibus aspernatur doloribus obcaecati necessitatibus
						soluta, quasi sed vel illo repudiandae veritatis molestias
						adipisci quas. Eveniet, velit quidem expedita natus et eius
						minus voluptatem, tenetur, dolor quis quos voluptate. Quis
						cumque delectus saepe. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Neque natus quos sit officia dolore
						asperiores reiciendis architecto enim id sint error cumque ad
						laborum, repellendus molestias officiis ab veritatis
						accusantium.
					</Typography>
					<Button
						style={{ alignItems: "start", marginTop: "20px" }}
						variant="contained"
					>
						Learn More
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Exceptional;
