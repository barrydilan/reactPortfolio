import RoundSpan from "../../shared/RoundSpan";

export default function TechStack() {
	return (
		<div className="mt-10 p-6">
			<h2 className="text-xl">Technologies</h2>
			<div className="mt-6 flex gap-1 flex-wrap">
				<RoundSpan text="TypeScript" />
				<RoundSpan text="JavaScript" />
				<RoundSpan text="React" />
				<RoundSpan text="Tailwind CSS" />
				<RoundSpan text="SCSS" />
				<RoundSpan text="HTML" />
				<RoundSpan text="Framer Motion" />
        <RoundSpan text="Ecommerce" />
				<RoundSpan text="Git" />
			</div>
		</div>
	);
}
