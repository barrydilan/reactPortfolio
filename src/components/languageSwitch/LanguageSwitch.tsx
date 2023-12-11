import { useState } from 'react';

import deFlag from '../../assets/svg/de.svg';
import engFlag from '../../assets/svg/gb.svg';
import { HeroProps } from '../hero/Hero';
import LanguageBtn from './ui/LanguageBtn';

export default function LanguageSwitch({ changeLanguage }: HeroProps) {
  const [chosenLanguage, setChosenLanguage] = useState('en');

  const hangleLanguageChange = () => {
    setChosenLanguage(chosenLanguage === 'en' ? 'de' : 'en');
    changeLanguage(chosenLanguage);
  };

  return (
    <LanguageBtn changeLanguage={hangleLanguageChange}>
      <div className="">
        <img src={chosenLanguage === 'en' ? engFlag : deFlag} className="h-8 w-8" alt={chosenLanguage} />
      </div>
    </LanguageBtn>
  );
}
