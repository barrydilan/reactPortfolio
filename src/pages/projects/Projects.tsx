import ProjectCard from "./ProjectCard";
import sushiSushiImg from '../../assets/img/sushisushi.png'

export default function Projects() {
	return (
		<section className="mt-10 p-6 sm:p-10">
			<h2>Projects</h2>
			<ul className="mt-6">
      <ProjectCard
				title="SushiSushi"
				text="Lorem Ipsum dolores ambro Ipsum dolores ambro Ipsum dolores ambropsum dolores ambro Ipsum dolores ambro"
        imgSrc={sushiSushiImg}
			/>
      </ul>
		</section>
	);
}
