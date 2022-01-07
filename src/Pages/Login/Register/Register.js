import {
	Alert,
	Button,
	CircularProgress,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImage from "../../../images/login.png";

const Register = () => {
	const [loginData, setLoginData] = useState({});

	const { user, registerUser, isLoading, authError } = useAuth();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		console.log(field, value);
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		if (loginData.password !== loginData.password2) {
			alert("password did not match");
			return;
		}
		registerUser(loginData.email, loginData.password);
		e.preventDefault();
	};
	return (
		<Grid container spacing={2}>
			<Grid sx={{ mt: 8 }} item xs={12} md={6}>
				<Typography variant="h3" gutterBottom>
					Register
				</Typography>
				{!isLoading && (
					<form onSubmit={handleLoginSubmit}>
						<TextField
							sx={{ width: "75%", m: 1 }}
							id="standard-basic"
							label="Your Email"
							name="email"
							type="email"
							onChange={handleOnChange}
							variant="standard"
						/>
						<TextField
							sx={{ width: "75%", m: 1 }}
							id="standard-basic"
							label="Your PassWord"
							type="password"
							name="password"
							onChange={handleOnChange}
							variant="standard"
						/>
						<TextField
							sx={{ width: "75%", m: 1 }}
							id="standard-basic"
							label="Confirm PassWord"
							type="password"
							name="password2"
							onChange={handleOnChange}
							variant="standard"
						/>
						<Button
							sx={{ width: "75%", m: 1 }}
							type="submit"
							variant="contained"
						>
							Register
						</Button>
						<NavLink style={{ textDecoration: "none" }} to="/login">
							<Button sx={{ width: "75%", m: 1 }} variant="text">
								Already Register ? Please Login
							</Button>
						</NavLink>
					</form>
				)}{" "}
				{isLoading && <CircularProgress />}
				{user?.email && (
					<Alert variant="filled" severity="success">
						User Created Successfully!
					</Alert>
				)}
				{authError && (
					<Alert variant="filled" severity="error">
						{authError}
					</Alert>
				)}
			</Grid>
			<Grid item xs={12} md={6}>
				<img
					style={{
						width: "75%",
						height: "100%",
					}}
					src={loginImage}
					alt=""
				/>
			</Grid>
		</Grid>
	);
};

export default Register;
