import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";

const downladSVG = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 -960 960 960"
		width="24"
		className="inline fill-main"
	>
		<path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
	</svg>
);

const contactSVG = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 -960 960 960"
		width="24"
		className="inline fill-main"
	>
		<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
	</svg>
);

export default function Hero() {
	return (
		<section className="md:px-4">
			<div className="sm:p-10 md:pt-20 p-6 flex gap-y-1 flex-col md:sticky md:top-0 w-full">
				<h3 className="text-2xl sm:text-4xl font-light sm:leading-10 sm:tracking-wider">
					Hi, my name is
				</h3>
				<h2 className="text-4xl sm:text-4xl hero-h2 text-accent font-bold">
					Harry Holubiev
				</h2>
				<h2 className="text-4xl sm:text-4xl text-primary font-light">
					I am a{" "}
					<span className="text-accent font-bold hero-h2">Frontend Developer</span>
				</h2>
				<div className="flex gap-2 mt-8">
					<a href="http://github.com/barrydilan"><img src={github} className="w-8 h-8" alt="Github Link" /></a>
					<a href="http://linkedin.com/in/barrydilan"><img src={linkedin} className="w-8 h-8" alt="LinkedIn Link" /></a>
				</div>
				<div className="flex gap-2 justify-center sm:self-start mt-8">
					<button className="p-2 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out flex items-center gap-x-2 sm:flex-auto sm:p-2.5 sm:text-sm rounded-full bg-accent flex-1 lg:text-lg font-medium text-main mt-4">
						Download CV
						{downladSVG}
					</button>
					<button className="p-2 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out flex items-center gap-x-2 sm:flex-auto sm:p-2.5 sm:text-sm rounded-full bg-accent flex-1 lg:text-lg font-medium text-main mt-4">
						Contact Me
						{contactSVG}
					</button>
				</div>
			</div>
		</section>
	);
}
