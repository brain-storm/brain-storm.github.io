import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
	const navRef = useRef(null);

	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY > 0) {
				navRef?.current.classList.add("shadow-lg");
			} else {
				navRef?.current.classList.remove("shadow-lg");
			}
		};
	}, []);

	function showNavbar(event) {
		let navElementss = document.getElementById("nav-elements");
		if (navElementss.style.display === "none") {
			navElementss.style.display = "flex";
		} else {
			navElementss.style.display = "none";
		}
	}

	function scrollToSection(event) {
		event.preventDefault();
		if (event.target.getAttribute("href")) {
			let bodyRect = document.body.getBoundingClientRect();
			let elemRect = document
				.querySelector(event.target.getAttribute("href"))
				.getBoundingClientRect();
			let offset = elemRect.top - bodyRect.top;
			window.scrollTo(0, offset - 56);
		}
		console.log(window.innerWidth);
		if (window.innerWidth < 768) {
			document.getElementById("nav-elements").style.display = "none";
		}
	}

	return (
		<nav
			ref={navRef}
			className="w-full pl-3 pr-2 md:px-14 py-2 flex flex-col md:flex-row md:items-center justify-center md:justify-between uppercase bg-white z-10 fixed top-0"
		>
			<div className="p-2 flex justify-between">
				<div className="font-bold">Brainstorm</div>
					<FaBars
						onClick={showNavbar}
						className="inline-block md:hidden text-3xl"
					/>
			</div>
			<div
				onClick={scrollToSection}
				id="nav-elements"
				className="hidden md:block flex flex-col items-center md:flex-row md:justify-evenly"
			>
				<a
					href="#about"
					className="py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
				>
					About
				</a>
				<a
					href="#experience"
					className="py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
				>
					Experience
				</a>
				<a
					href="#work"
					className="py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
				>
					Work
				</a>
				{/* <a
					href="#blogs"
					className="py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
				>
					Blogs
				</a> */}
				<a
					href="#contact"
					className="py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
				>
					Contact
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
