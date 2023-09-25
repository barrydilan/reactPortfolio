import RoundSpan from "../../shared/RoundSpan";

export default function TechStack() {
	return (
		<div className="mt-10 p-6 sm:p-10">
			<h2 className="font-light sticky top-0 bg-main pt-4 z-10">Technologies</h2>
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
