import RoundSpan from "../../shared/RoundSpan";

export default function TechStack() {
	return (
		<div className="mt-10 p-6">
			<h2>Technologies</h2>
			<div className="mt-6 flex flex-wrap sm:justify-start">
        <RoundSpan text="React" />
				<RoundSpan text="TypeScript" />
				<RoundSpan text="JavaScript" />
        <RoundSpan text="Tailwind CSS" />
        <RoundSpan text="Framer Motion" />
        <RoundSpan text="Ecommerce" />
				<RoundSpan text="SCSS" />
				<RoundSpan text="HTML" />
			</div>
		</div>
	);
}
