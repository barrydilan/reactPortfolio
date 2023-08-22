import RoundSpan from "../../shared/RoundSpan"

interface IProjectCardProps {
  title: string,
  text: string,
  imgSrc: string
}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div className="mt-6">
      <h3>
        {props.title}
      </h3>
      <p className="mt-3">
        {props.text}
      </p>
      <div className="mt-3">
        <img src={props.imgSrc} alt="projectScreenshot"></img>
      </div>
      <div className="mt-3 flex gap-2 flex-wrap">
        <RoundSpan text="React" />
        <RoundSpan text="Tailwind" />
        <RoundSpan text="TypeScript" />
        <RoundSpan text="Ecommerce" />
      </div>
    </div>
  )
}
