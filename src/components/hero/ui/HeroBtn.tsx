import { IChildren } from '../../../types';

interface IHeroBtn extends IChildren {
  onClick?: () => void;
}

export default function HeroBtn(props: IHeroBtn) {
  return (
    <button
      onClick={props.onClick}
      className="mt-4 flex flex-1 translate-y-4 transform items-center justify-center gap-x-1 rounded-full bg-accent p-3 text-sm font-medium text-main duration-500 ease-in-out hover:translate-y-0 sm:flex-auto sm:p-2.5 sm:text-sm"
    >
      {props.children}
    </button>
  );
}
