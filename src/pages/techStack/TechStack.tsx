import RoundSpan from "../../shared/RoundSpan";

export default function TechStack() {
	return (
		<div className="mt-10 p-6">
			<h3>Technologies</h3>
			<div className="mt-3 flex gap-2 flex-wrap">
				<RoundSpan text="TypeScript" />
				<RoundSpan text="JavaScript" />
				<RoundSpan text="React" />
				<RoundSpan text="Tailwind CSS" />
				<RoundSpan text="SCSS" />
				<RoundSpan text="HTML" />
				<RoundSpan text="Framer Motion" />
				<RoundSpan text="Git" />
				<RoundSpan text="Ecommerce" />
			</div>
		</div>
	);
}
