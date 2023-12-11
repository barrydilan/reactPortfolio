interface IListItem {
  text: string;
  icon: string;
}

export default function ListItem(props: IListItem) {
  return (
    <li className="flex items-center justify-start gap-4 p-2">
      <img className="h-6 w-6" src={props.icon} alt="icon" />
      <span className="text-sm font-light">{props.text}</span>
    </li>
  );
}
