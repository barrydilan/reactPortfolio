import { IChildren } from "../types";

interface IChildrenStyled extends IChildren {
  className?: string;
}

export default function SectionTitle (props : IChildrenStyled) {
  return (
    <h2 className={`font-light sticky top-0 bg-main pt-4 ${props.className} pb-4`}>{props.children}</h2>
  )
}
