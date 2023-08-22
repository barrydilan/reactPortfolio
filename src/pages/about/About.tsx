import ListItem from "../../shared/ListItem";
import { FaUniversity, FaLanguage } from "react-icons/fa";

export default function About() {
	return (
		<section className="mt-24 p-8 mx-auto">
			<h3 className="text-xl">
				<span>01. </span>About Me
			</h3>
			<div className="mt-12 flex flex-col items-center gap-5">
				<div className="bg-white rounded-full w-40 h-40"></div>
				<p className="text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
					reprehenderit aperiam pariatur dolorum laboriosam facere explicabo
					enim ad rem reiciendis voluptatum iure, impedit ipsa sequi architecto
					obcaecati. Aut, aliquam et.
				</p>
				<ul className="mt-12">
					<ListItem
						icon={FaUniversity}
						text="ONMU, Mechanical Engineering B.Sc., 2018 - 2022"
					></ListItem>
					<ListItem
						icon={FaUniversity}
						text="RS-School (JS FE) - 2023"
					></ListItem>
					<ListItem
						icon={FaLanguage}
						text="English - C1"
					></ListItem>
          <ListItem
						icon={FaLanguage}
						text="German - B1"
					></ListItem>
          <ListItem
						icon={FaLanguage}
						text="Russian, Ukrainian - native"
					></ListItem>
				</ul>
			</div>
		</section>
	);
}
