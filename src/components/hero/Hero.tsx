import { i18n, t } from 'i18next';

import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import LanguageSwitch from '../languageSwitch/LanguageSwitch';
import HeroBtn from './ui/HeroBtn';

const downladSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="inline fill-main">
    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
  </svg>
);

const contactSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="inline fill-main">
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
  </svg>
);

export interface HeroProps {
  changeLanguage: (lng: string) => void;
  lngs: { [key: string]: { nativeName: string } };
  i18n: i18n;
}

export default function Hero({ changeLanguage, lngs, i18n }: HeroProps) {
  const downloadCv = () => {
    window.open('/reactPortfolio/src/assets/cv-holubiev-harri.pdf', '_blank');
  };
  const sendEmail = () => {
    const mailto = 'mailto:harry.holubiev@gmail.com';
    window.location.href = mailto;
  };

  return (
    <section className="pt-6 md:px-4">
      <div className="flex w-full flex-col gap-y-1 p-6 sm:p-14 md:sticky md:top-0 md:p-4 md:pt-20">
        <h3 className="text-2xl font-light sm:text-4xl sm:leading-10 sm:tracking-wider">{t('hero.h3')}</h3>
        <h2 className="hero-h2 text-4xl font-bold text-accent sm:text-4xl">Harry Holubiev</h2>
        <h2 className="text-4xl font-light text-primary sm:text-4xl">
          {t('hero.iAm')}&nbsp;
          <span className="hero-h2 font-bold text-accent">{t('hero.developer')}</span>
        </h2>
        <div className="mt-8 flex items-center gap-2">
          <a href="http://github.com/barrydilan">
            <img src={github} className="h-8 w-8" alt="Github Link" />
          </a>
          <a href="http://linkedin.com/in/harry-holubiev-2a3188221">
            <img src={linkedin} className="h-8 w-8" alt="LinkedIn Link" />
          </a>
          <LanguageSwitch lngs={lngs} i18n={i18n} changeLanguage={changeLanguage} />
          <div></div>
        </div>
        <div className="mt-8 flex justify-center gap-2 sm:self-start ">
          <HeroBtn onClick={downloadCv}>
            <span>{t('hero.downloadBtn')}</span>
            {downladSVG}
          </HeroBtn>
          <HeroBtn onClick={sendEmail}>
            {t('hero.contactBtn')}
            {contactSVG}
          </HeroBtn>
        </div>
      </div>
    </section>
  );
}
