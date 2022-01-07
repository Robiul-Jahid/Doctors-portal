import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Exceptional from "../../Exceptional/Exceptional";
import Testimonial from "../../Testimonial/Testimonial";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
	return (
		<div>
			<Navigation></Navigation>
			<Banner></Banner>
			<Services></Services>
			<Exceptional></Exceptional>
			<AppointmentBanner></AppointmentBanner>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
