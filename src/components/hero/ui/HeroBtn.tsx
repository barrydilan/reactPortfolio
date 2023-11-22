import { IChildren } from "../../../types";

interface IHeroBtn extends IChildren {
  onClick?: () => void;
}

export default function HeroBtn (props: IHeroBtn) {
  return (
    <button onClick={props.onClick} className="p-3 text-sm transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out flex items-center justify-center gap-x-1 sm:flex-auto sm:p-2.5 sm:text-sm rounded-full bg-accent flex-1 lg:text-lg font-medium text-main mt-4">
            {props.children}
		</button>
  )
}
