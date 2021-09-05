import "../index.css";

function Hero() {
	return (
		<section className="relative bg-hero-image bg-center bg-no-repeat bg-cover h-screen">
			{/* // <section className="flex h-screen justify-center items-center"> */}
			<div className="absolute top-32 left-6" style={{lineHeight:"1.25", borderRadius:"50%",backgroundColor:"white", boxShadow:"0 0 50px 50px white"}}>
				<h1 style={{fontSize:"calc(50px + 2vw)"}}>
					<span>Hi, We are</span> <br />
					<span className="font-bold text-teal-900">Brainstorm</span>
				</h1>
				<p className="p-1 text-xl">Web developers &amp; Disrupturs</p>
			</div>
		</section>
		// </section>
	);
}

export default Hero;
