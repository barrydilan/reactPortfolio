import { IconType } from "react-icons";
import { IconContext } from "react-icons";


interface IListItem {
	icon: IconType;
	text: string;
}

export default function ListItem(props: IListItem) {
	return (
    <IconContext.Provider value={{ color: "white", className: "w-6 h-6" }}>
		<li className="flex items-center gap-4 p-2">
			<span><props.icon /></span>
			<span className="text-sm">{props.text}</span>
		</li>
    </IconContext.Provider>
	);
}
