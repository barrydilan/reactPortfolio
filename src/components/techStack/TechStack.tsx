import { t } from 'i18next';

import RoundSpan from '../../shared/RoundSpan';
import SectionTitle from '../../shared/SectionTitle';

export default function TechStack() {
  return (
    <div className="mt-10 p-6 sm:p-6">
      <SectionTitle className={'z-10'}>{t('technologies.sectionTitle')}</SectionTitle>
      <div className="mt-6 flex flex-wrap sm:justify-start">
        <RoundSpan text="React" />
        <RoundSpan text="React Router" />
        <RoundSpan text="Next JS" />
        <RoundSpan text="TypeScript" />
        <RoundSpan text="JavaScript" />
        <RoundSpan text="Tailwind CSS" />
        <RoundSpan text="Framer Motion" />
        <RoundSpan text="Ecommerce" />
        <RoundSpan text="SCSS" />
        <RoundSpan text="HTML" />
      </div>
    </div>
  );
}
