import { ReactNode } from 'react';

interface ILanguageBtnProps {
  changeLanguage: () => void;
  children: ReactNode;
}

export default function LanguageBtn({ changeLanguage, children }: ILanguageBtnProps) {
  return (
    <button onClick={changeLanguage} className="hover:pointer text-3xl transition hover:text-accent">
      {children}
    </button>
  );
}
