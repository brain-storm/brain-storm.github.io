import "../index.css";
import { FaAngleDown } from "react-icons/fa";
import navbar from "../constants/navbar";

function Hero() {
	function moveToAboutSection() {
		let bodyRect = document.body.getBoundingClientRect();
		let elemRect = document
			.querySelector(navbar[0].href)
			.getBoundingClientRect();
		let offset = elemRect.top - bodyRect.top;
		window.scrollTo(0, offset - 56);
	}
	return (
		<section className="relative bg-hero-image bg-center bg-no-repeat bg-cover h-screen">
			<div
				className="absolute"
				style={{
					top: "calc(3rem + 6vw)",
					left: "calc(1.5rem + 0.5vw)",
					lineHeight: "1.25",
					borderRadius: "50%",
					backgroundColor: "white",
					boxShadow: "0 0 50px 50px white",
				}}
			>
				<h1 style={{ fontSize: "calc(50px + 2vw)" }}>
					<span>Hi, We are</span> <br />
					<span className="font-bold text-teal-900">Brainstorm</span>
				</h1>
				<p className="p-1 text-xl">Web &amp; Mobile App Developers</p>
			</div>
			<div className="arrow-animation sm:hidden absolute bottom-12 flex justify-center w-full">
				<FaAngleDown
					onClick={moveToAboutSection}
					className="cursor-pointer text-6xl text-white"
				/>
			</div>
		</section>
	);
}

export default Hero;
