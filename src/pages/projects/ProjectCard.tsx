import RoundSpan from "../../shared/RoundSpan";

interface IProjectCardProps {
	title: string;
	text: string;
	imgSrc: string;
}

export default function ProjectCard(props: IProjectCardProps) {
	return (
		<li className="flex flex-col gap-y-6">  
      <div className="flex items-center gap-x-4">
			<img className="inline-block max-w-[200px]" src={props.imgSrc} alt="projectScreenshot"></img>
      <div className="max-w-[250px]">
				<h3 className="text-lg">{props.title}</h3>
				<p className="text-sm">{props.text}</p>
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
