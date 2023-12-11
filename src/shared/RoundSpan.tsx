interface IRoundSpan {
  text: string;
}

export default function RoundSpan(props: IRoundSpan) {
  return (
    <div className="inline-block rounded-full p-1 hover:cursor-pointer">
      <span
        className="text-purple-900 relative inline-block rounded-full bg-accent px-2 py-1 text-center text-sm text-main text-opacity-90 transition hover:cursor-pointer hover:text-primary-1
      sm:text-sm md:px-4"
      >
        {props.text}
      </span>
    </div>
  );
}
