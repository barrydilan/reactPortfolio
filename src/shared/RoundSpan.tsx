interface IRoundSpan {
	text: string;
}

export default function RoundSpan(props: IRoundSpan) {
	return (
		<div
			className="p-1 rounded-full inline-block"
		>
			<span className="rounded-full inline-block text-center px-2 py-1 text-opacity-90 bg-accent text-main font-light relative text-sm text-purple-900
      sm:text-sm md:px-4">
				{props.text}
			</span>
		</div>
	);
}
