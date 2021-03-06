import { createContext, useState, useContext } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [project, setProject] = useState(null);
	const [currentImageInd, setCurrentImageInd] = useState(0);

	const cancelButtonRef = useRef(null);

	function handleLeft(event) {
		setCurrentImageInd((currInd) => {
			if (currInd + 1 !== project.images.length) {
				return currInd + 1;
			} else {
				return 0;
			}
		});
	}

	function handleRight(event) {
		setCurrentImageInd((currInd) => {
			if (currInd - 1 !== -1) {
				return currInd - 1;
			} else {
				return project.images.length - 1;
			}
		});
	}

	function handleClose(event) {
		setOpen(false);
		setCurrentImageInd(0);
	}

	return (
		<ModalContext.Provider value={{ open, setOpen, setProject }}>
			{children}
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					initialFocus={cancelButtonRef}
					onClose={handleClose}
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="text-center">
											<Dialog.Title
												as="h3"
												className="text-xl leading-6 font-medium text-gray-900 mb-4"
											>
												{project?.name}
											</Dialog.Title>
											<div className="relative h-auto">
												<img
													className="w-full h-auto"
													src={
														project?.images[
															currentImageInd
														]
													}
													alt={project?.name}
												/>
												{project?.images.length > 1 && (
													<>
														<div
															onClick={handleLeft}
															style={{
																transform:
																	"translateY(-50%)",
															}}
															className="absolute top-1/2 p-4 left-2 bg-gray-200 rounded opacity-70 cursor-pointer"
														>
															<FaArrowLeft />
														</div>
														<div
															onClick={
																handleRight
															}
															style={{
																transform:
																	"translateY(-50%)",
															}}
															className="absolute top-1/2 p-4 right-2 bg-gray-200 rounded opacity-70 cursor-pointer"
														>
															<FaArrowRight />
														</div>
													</>
												)}
											</div>

											<div className="mt-4">
												<p className="text-md text-gray-700">
													{project?.description}
												</p>
											</div>
											{project?.features && (
												<>
													<div className="mt-4 uppercase text-gray-700 font-bold text-left">Features</div>
													<ul className="mt-2 text-left list-disc list-inside text-sm text-gray-700">
														{project?.features.map(
															(feature) => {
																return (
																	<li>
																		{
																			feature
																		}
																	</li>
																);
															}
														)}
													</ul>
												</>
											)}
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									{project?.liveUrl && (
										<a
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											href={project?.liveUrl}
											target="_blank"
											rel="noreferrer"
										>
											Visit Website
										</a>
									)}
									{project?.repoUrl && (
										<a
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											href={project?.repoUrl}
											target="_blank"
											rel="noreferrer"
										>
											Go to Repository
										</a>
									)}
									{project?.apk && (
										<a
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											href={project?.apk}
											target="_blank"
											rel="noreferrer"
										>
											Download APK
										</a>
									)}
									<button
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={handleClose}
										ref={cancelButtonRef}
									>
										Close
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	return useContext(ModalContext);
};
