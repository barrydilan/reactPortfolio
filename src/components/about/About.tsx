import SectionTitle from "../../shared/SectionTitle";

export default function About() {
	return (
		<section className="mt-10 p-6 sm:p-10">
			<SectionTitle>About Me</SectionTitle>
			<div className="mt-6 flex flex-col items-center md:items-start gap-5">
				<div className="sm:grow md:flex md:flex-col">
					<div className="bg-primary rounded-full w-40 h-40 mt-6 mx-auto md:max-w-[200px] md:max-h-[200px]"><img className="w-full h-full object-cover rounded-full" src="src/assets/img/photo.jpeg" alt="" /></div>
				</div>
				<p className="text-base font-[300] mt-6 sm:flex-none md:flex-auto self-end">
          Hi, my name is Harry! I am a <strong>Frontend Web Developer</strong> based in <strong>Hamburg</strong>, Germany.
          My passion lies in coding, design, and technology, all geared towards creating exceptional user experiences. 
					<br /> In 2022, I have graduated from a university with a Bachelor's degree in Mechanical Engineering. Since then, I've been on an exciting journey in the tech industry.
          <br />
          I speak <strong>English (C1)</strong>, and <strong>German (B1)</strong>, while <strong>Russian</strong> and <strong>Ukrainian</strong> are my native languages.
				</p>
			</div>
		</section>
	);
}
