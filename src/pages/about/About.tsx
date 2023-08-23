import ListItem from "../../shared/ListItem";
import language from "../../assets/svg/language.svg";
import diploma from "../../assets/svg/diploma.svg";

export default function About() {
	return (
		<section className="mt-10 p-6 sm:p-10">
			<h2>About Me</h2>
			<div className="mt-6 flex flex-col items-center gap-5">
				<div className="sm:grow">
					<div className="bg-primary rounded-full w-40 h-40 mt-6 mx-auto"></div>
					<ul className="mt-6 flex flex-col sm:flex-row flex-wrap">
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
					</ul>
				</div>
				<p className="text-base mt-6 sm:flex-none">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
					reprehenderit aperiam pariatur dolorum laboriosam facere explicabo
					enim ad rem reiciendis voluptatum iure, impedit ipsa sequi architecto
					obcaecati. Aut, aliquam et.
				</p>
			</div>
		</section>
	);
}
