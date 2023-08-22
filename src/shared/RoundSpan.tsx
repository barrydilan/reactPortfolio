interface IRoundSpan {
	text: string;
}

export default function RoundSpan(props: IRoundSpan) {
	return (
		<div
			className="p-1 rounded-full inline-block bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]
     from-purple-200 via-purple-400 to-purple-800 opacity-75"
		>
			<span className="rounded-full inline-block text-center p-2 bg-accent text-main font-light relative text-sm text-purple-900">
				{props.text}
			</span>
		</div>
	);
}
