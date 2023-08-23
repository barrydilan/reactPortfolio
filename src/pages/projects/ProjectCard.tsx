import RoundSpan from "../../shared/RoundSpan";

interface IProjectCardProps {
	title: string;
	text: string;
	imgSrc: string;
}

export default function ProjectCard(props: IProjectCardProps) {
	return (
		<>
			<div className="mt-6 sm:flex sm:flex-row-reverse sm:gap-5">
				<div className="flex-1">
					<h3 className="font-light text-primary-1 text-xl mt-6">
						{props.title}
					</h3>
					<div>
						<p className="mt-6 font-normal text-base">{props.text}</p>
					</div>
					<div className="mt-6 flex gap-2 flex-wrap sm:flex-">
						<RoundSpan text="React" />
						<RoundSpan text="Tailwind" />
						<RoundSpan text="TypeScript" />
						<RoundSpan text="Ecommerce" />
					</div>
				</div>
				<div className="mt-6 max-w-[350px] flex-1">
					<img src={props.imgSrc} alt="projectScreenshot"></img>
				</div>
			</div>
		</>
	);
}
