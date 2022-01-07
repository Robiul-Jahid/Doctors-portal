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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImage from "../../../images/login.png";

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, isLoading, loginUser, authError } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		console.log(field, value);
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};
	return (
		<Grid container spacing={2}>
			<Grid sx={{ mt: 8 }} item xs={12} md={6}>
				<Typography variant="h3" gutterBottom>
					Login
				</Typography>
				<form onSubmit={handleLoginSubmit}>
					<TextField
						sx={{ width: "75%", m: 1 }}
						id="standard-basic"
						label="Your Email"
						name="email"
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
					<Button
						sx={{ width: "75%", m: 1 }}
						type="submit"
						variant="contained"
					>
						Login
					</Button>
					<NavLink style={{ textDecoration: "none" }} to="/register">
						<Button sx={{ width: "75%", m: 1 }} variant="text">
							New User ? Please Register
						</Button>
					</NavLink>
					)} {isLoading && <CircularProgress />}
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
				</form>
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

export default Login;
