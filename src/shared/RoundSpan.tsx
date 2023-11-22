interface IRoundSpan {
	text: string;
}

export default function RoundSpan(props: IRoundSpan) {
	return (
		<div
			className="p-1 rounded-full inline-block hover:cursor-pointer"
		>
			<span className="rounded-full hover:cursor-pointer hover:text-primary-1 transition text-main inline-block text-center px-2 py-1 text-opacity-90 bg-accent relative text-sm text-purple-900
      sm:text-sm md:px-4">
				{props.text}
			</span>
		</div>
	);
}
