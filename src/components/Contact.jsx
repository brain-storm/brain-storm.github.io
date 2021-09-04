import { useForm, ValidationError } from "@formspree/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { useEffect, useRef } from "react";

function Contact() {
	const [state, handleSubmit] = useForm("mbjqqjbb");
	const emailInputRef = useRef(null);
	const messageInputRef = useRef(null);

	useEffect(() => {
		if (state.succeeded) {
			alert("Yay! We got your message. We will revert back to you soon.");
			emailInputRef.current.value = "";
			messageInputRef.current.value = "";
		}
	}, [state.succeeded]);

	return (
		<section id="contact" className="p-4 flex justify-center">
			<div className="max-w-5xl w-full flex flex-col items-center">
				<div className="text-teal-900 flex gap-2 flex-col items-center mb-3">
					<FaRegPaperPlane className="text-5xl"/>
                    <p className="text-2xl uppercase">Get In Touch</p>
				</div>
				<form onSubmit={handleSubmit} className="w-full">
					<label htmlFor="email">Email Address</label>
					<br />
					<input
						ref={emailInputRef}
						className="my-1 p-2 w-full border-2"
						id="email"
						type="email"
						name="email"
						placeholder="Type your email.."
						required
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
					<label className="inline-block mt-4 mb-1" htmlFor="message">
						Message
					</label>
					<br />
					<textarea
						ref={messageInputRef}
						id="message"
						name="message"
						style={{ minHeight: "4rem" }}
						className="w-full p-2 border-2"
						placeholder="Type you messege"
					></textarea>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<div className="flex justify-center m-2">
						<button
							type="submit"
							disabled={state.submitting}
							className="rounded bg-teal-600 hover:bg-teal-900 text-white px-5 py-2 text-xl"
						>
							{state.submitting && "Sending..."}
							{!state.submitting && "Send"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Contact;
