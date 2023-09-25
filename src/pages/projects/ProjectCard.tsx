import RoundSpan from "../../shared/RoundSpan";

interface IProjectCardProps {
	title: string;
	text: string;
	imgSrc: string;
}

export default function ProjectCard(props: IProjectCardProps) {
	return (
		<li className="flex flex-col gap-y-6">  
      <div className="flex flex-col items-start gap-4">
			<img className="inline-block max-w-[200px]" src={props.imgSrc} alt="projectScreenshot"></img>
      <div>
				<h3 className="text-lg mb-4 font-light">{props.title}</h3>
				<p className="text-sm font-light leading-5">{props.text}</p>
			</div>
      </div>
			<div className="">
				<RoundSpan text="React" />
				<RoundSpan text="Tailwind" />
				<RoundSpan text="TypeScript" />
				<RoundSpan text="Ecommerce" />
			</div>
		</li>
	);
}
