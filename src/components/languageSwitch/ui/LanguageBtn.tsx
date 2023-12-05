import { ReactNode } from "react";

interface ILanguageBtnProps {
  changeLanguage: () => void;
  children: ReactNode;
}

export default function LanguageBtn({changeLanguage, children} : ILanguageBtnProps) {
  return (
    <button onClick={changeLanguage} className="hover:pointer hover:text-accent transition text-3xl">{children}</button>
  )
}
