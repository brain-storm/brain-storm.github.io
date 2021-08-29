function Navbar() {
	return (
		<nav className="px-14 py-2 flex justify-between uppercase">
			<div className="p-2">Brainstorm</div>
			<div className="flex justify-evenly">
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
				<a
					href="#blogs"
					className="py-2 px-4 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white cursor-pointer rounded"
				>
					Blogs
				</a>
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
