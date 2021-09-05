import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import navbar from "../constants/navbar";

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
		if (navElementss.classList.contains("hidden")) {
			navElementss.classList.remove("hidden");
		} else {
			navElementss.classList.add("hidden");
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
		if (window.innerWidth < 768) {
			document.getElementById("nav-elements").classList.add("hidden");
		}
	}

	return (
		<nav
			ref={navRef}
			className="w-full pl-3 pr-2 md:px-14 py-2 flex flex-col md:flex-row md:items-center justify-center md:justify-between uppercase bg-white z-10 fixed top-0"
		>
			<div className="flex justify-between items-center">
				<div className="font-bold">
					<img
						className="inline-block w-12 h-auto mr-1"
						src={logo}
						alt="Brainstorm Logo"
					/>
					<span>Brainstorm</span>
				</div>
				<FaBars
					onClick={showNavbar}
					className="inline-block md:hidden text-3xl cursor-pointer"
				/>
			</div>
			<div
				onClick={scrollToSection}
				id="nav-elements"
				className="hidden md:block flex flex-col items-center md:flex-row md:justify-evenly"
			>
				{navbar.map((navElem) => {
					return (
						<a
							href={navElem.href}
							className="mx-2 py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
						>
							{navElem.value}
						</a>
					);
				})}
			</div>
		</nav>
	);
}

export default Navbar;
