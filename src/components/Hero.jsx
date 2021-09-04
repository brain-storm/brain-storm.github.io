import "../index.css";

function Hero() {
	return (
		// <section className="bg-hero-image bg-fixed bg-center bg-no-repeat bg-cover">
		<section className="flex h-screen justify-center items-center">
			<div className="text-center">
				<h1 className="text-6xl">
					Hi, We are
					<span className="font-bold text-teal-900"> Brainstorm</span>
				</h1>
				<p className="p-4 text-xl">Web developers &amp; Disrupturs</p>
			</div>
		</section>
		// </section>
	);
}

export default Hero;
