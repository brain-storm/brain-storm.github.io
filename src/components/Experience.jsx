import angular from "../assets/skills/angular.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import mongodb from "../assets/skills/mongodb.png";
import js from "../assets/skills/js.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.png";
import java from "../assets/skills/java.png";
import bootstrap from "../assets/skills/bootstrap.png";
import express from "../assets/skills/express.png";
import flutter from "../assets/skills/flutter.png";
import springboot from "../assets/skills/springboot.png";
import android from "../assets/skills/android.png";
import elastic from "../assets/skills/elastic.png";
import redux from "../assets/skills/redux.png";

function Experience() {
	return (
		<section id="experience" className="p-4 flex justify-center">
			<div className="max-w-5xl w-full flex flex-col items-center">
				<div className="text-center">
					<h2 className="text-2xl uppercase font-bold text-teal-900">
						Experience
					</h2>
					<p className="m-auto py-2">
						We've been doing development for about 2 years now, and
						we are always eager to learn more in this fast paced
						industry.
					</p>
				</div>
				<div className="flex flex-col items-center max-w-md py-1">
					<h3 className="uppercase font-semibold pb-4">
						Technologies We Have Worked With
					</h3>
					<div className="flex flex-wrap items-center justify-center">
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={html}
							alt="HTML"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={css}
							alt="CSS"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={angular}
							alt="Angular"
						/>

						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={react}
							alt="React"
						/>

						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={node}
							alt="Node"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={mongodb}
							alt="Mongodb"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={js}
							alt="JavaScript"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={github}
							alt="Github"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={java}
							alt="Java"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={bootstrap}
							alt="Bootstrap"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={express}
							alt="Express"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={flutter}
							alt="Flutter"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={springboot}
							alt="Spring Boot"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={android}
							alt="Android"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={elastic}
							alt="Elastic Search"
						/>
						<img
							className="filter grayscale hover:filter-none w-12 h-auto m-1 cursor-pointer"
							src={redux}
							alt="Redux"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
