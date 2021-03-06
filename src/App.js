import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Switch>
						<PrivetRoute path="/appointment">
							<Appointment></Appointment>
						</PrivetRoute>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
