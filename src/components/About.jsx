import { about } from "../constants/about";

function About() {
	return (
		<section id="about" className="p-4 flex justify-center bg-gray-100">
			<div className="max-w-5xl w-full text-center">
				<h2 className="text-2xl uppercase font-bold text-teal-900">
					A Little About Us
				</h2>
				<p className="m-auto py-2">{about}</p>
			</div>
		</section>
	);
}

export default About;
