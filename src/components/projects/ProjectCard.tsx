import RoundSpan from '../../shared/RoundSpan';

interface IProjectCardProps {
  title: string;
  text: string;
  imgSrc: string;
  technologies: string[];
}

const projectLinkSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
    className="inline scale-75 fill-primary text-xs opacity-0 transition group-hover:opacity-100"
  >
    <path d="M228.308-200 200-228.308 651.692-680H360v-40h360v360h-40v-291.692L228.308-200Z" />
  </svg>
);

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <li className="group flex flex-col gap-y-6 rounded-md p-4 transition duration-700 hover:cursor-pointer hover:bg-primary/5 hover:backdrop-blur-2xl">
      <div className="">
        <div className="flex flex-col items-start gap-4">
          <img
            className="inline-block max-w-[200px] group-hover:cursor-pointer "
            src={props.imgSrc}
            alt="projectScreenshot"
          ></img>
          <div>
            <h3 className="relative mb-4 flex items-center text-lg font-light group-hover:cursor-pointer group-hover:text-accent">
              {props.title} {projectLinkSvg}
            </h3>
            <p className="text-sm font-light leading-5">{props.text}</p>
          </div>
        </div>
        <div className="mt-4">
          {props.technologies.map((technologie) => (
            <RoundSpan text={technologie} />
          ))}
        </div>
      </div>
    </li>
  );
}
