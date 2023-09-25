import ListItem from "../../shared/ListItem";
import language from "../../assets/svg/language.svg";
import diploma from "../../assets/svg/diploma.svg";

export default function About() {
	return (
		<section className="mt-10 p-6 sm:p-10">
			<h2 className="font-light">About Me</h2>
			<div className="mt-6 flex flex-col items-center md:items-start gap-5">
				<div className="sm:grow md:flex md:flex-col">
					<div className="bg-primary rounded-full w-40 h-40 mt-6 mx-auto md:max-w-[200px] md:max-h-[200px]"><img className="w-full h-full object-cover rounded-full" src="src/assets/img/photo.jpeg" alt="" /></div>
					{/* <ul className="mt-6 flex flex-col sm:flex-row md:flex-col flex-wrap md:flex-shrink">
						<ListItem
							icon={diploma}
							text="ONMU, Mechanical Engineering B.Sc., 2018 - 2022"
						></ListItem>
						<ListItem icon={diploma} text="RS-School (JS FE) - 2023"></ListItem>
						<ListItem icon={language} text="English - C1"></ListItem>
						<ListItem icon={language} text="German - B1"></ListItem>
						<ListItem
							icon={language}
							text="Russian, Ukrainian - native"
						></ListItem>
					</ul> */}
				</div>
				<p className="text-base font-[300] mt-6 sm:flex-none md:flex-auto self-end">
          Hi, my name is Harry! I am a <strong>Frontend Web Developer</strong> based in <strong>Hamburg</strong>, Germany.
          My passion lies in coding, design, and technology, all geared towards creating exceptional user experiences. 
					In 2022, I have graduated from a univercity with a Bachelor's degree in Mechanical Engineering. Since then, I've been on an exciting journey in the tech industry.
          I speak <strong>English (C1)</strong>, and <strong>German (B1)</strong>, while <strong>Russian</strong> and <strong>Ukrainian</strong> are my native languages.
				</p>
			</div>
		</section>
	);
}
