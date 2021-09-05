import { useModal } from "../providers/ModalProviders";
import { projects } from "../constants/projects";
import "../index.css";

function Work() {
	const { setOpen, setProject } = useModal();

	function handleProjectModalOpen(project) {
		setProject(project);
		setOpen(true);
	}

	return (
		<section
			id="work"
			className="p-8 flex justify-center bg-gray-100"
		>
			<div className="max-w-5xl w-full flex flex-col items-center">
				<h2 className="text-2xl uppercase font-bold mb-4 text-teal-900">
					What We Have Done
				</h2>
				<div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => {
						return (
							<div
								onClick={() => handleProjectModalOpen(project)}
								className="relative cursor-pointer project-card"
							>
								<div className="absolute inset-0 w-full h-full overlay"></div>
								<div className="absolute w-auto top-2 left-2/4 opacity-0 search-icon">
									<div className="relative -left-2/4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-white"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
								<img
									className="w-full h-auto"
									src={project.thumbnail}
									alt={project.name}
								/>
								<div className="uppercase bg-teal-600 text-white text-center font-semibold absolute p-1 w-full bottom-0 opacity-0 project-name">
									{project.name}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
export default Work;
