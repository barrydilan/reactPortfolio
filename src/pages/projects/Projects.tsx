import ProjectCard from "./ProjectCard";
import sushiSushiImg from '../../assets/img/sushisushi.png'

export default function Projects() {
	return (
		<section className="mt-10 p-6 sm:p-10">
			<h2 className="font-light sticky top-0 bg-main pt-4">Projects</h2>
			<ul className="mt-8">
      <a href="https://github.com/barrydilan/eCommerce-Application">
      <ProjectCard
				title="SushiSushi - Online Food Delivery App"
				text="Lorem Ipsum dolores ambro Ipsum dolores ambro Ipsum dolores ambropsum dolores ambro Ipsum dolores ambro Lorem Ipsum dolores ambro Ipsum dolores ambro Ipsum dolores ambropsum dolores ambro Ipsum dolores ambro"
        imgSrc={sushiSushiImg}
			/>
      </a>
      </ul>
		</section>
	);
}
