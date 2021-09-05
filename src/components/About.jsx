import { about } from "../constants/about";
import avatar from "../assets/avatar.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
	return (
		<section
			id="about"
			className="px-4 py-8 flex justify-center bg-gray-100"
		>
			<div className="max-w-5xl w-full text-center">
				<h2 className="text-2xl uppercase font-bold text-teal-900">
					A Little About Us
				</h2>
				<p className="m-auto py-2">{about.description}</p>
				<p className="uppercase font-semibold pb-4 tracking-widest text-lg">
					Developers
				</p>
				<div className="flex justify-center flex-wrap gap-8">
					{about.devs.map((dev) => {
						return (
							<div
								style={{ minWidth: "14rem" }}
								className="p-4 cursor-pointer rounded flex flex-col items-center bg-white shadow-md transition-all duration-450 linear hover:shadow-xl"
							>
								<img
									className="w-12 rounded-full"
									src={dev.avatar}
									alt="Avatar"
								/>
								<p className="font-bold text-lg mt-2">
									{dev.name}
								</p>
								<a href={`mailto: ${dev.email}`}>{dev.email}</a>
								<div className="mt-2 flex gap-2">
									<a
										href={dev.linkedin}
										target="_blank"
										rel="noreferrer"
									>
										<FaLinkedin
											style={{ color: "#0a66c2" }}
											className="text-2xl"
										/>
									</a>
									<a
										href={dev.github}
										target="_blank"
										rel="noreferrer"
									>
										<FaGithub className="text-2xl" />
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default About;
