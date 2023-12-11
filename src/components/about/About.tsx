import { t } from 'i18next';

import profileImg from '../../assets/img/photo.jpeg';
import SectionTitle from '../../shared/SectionTitle';

export default function About() {
  return (
    <section className="mt-16 p-6 sm:p-6">
      <SectionTitle>{t('about.sectionTitle')}</SectionTitle>
      <div className="mt-6 flex flex-col items-center gap-5 md:items-start">
        <div className="sm:grow md:flex md:flex-col">
          <div className="mx-auto mt-6 h-40 w-40 rounded-full bg-primary md:max-h-[200px] md:max-w-[200px]">
            <img className="h-full w-full rounded-full object-cover" src={profileImg} alt="" />
          </div>
        </div>
        <p
          className="mt-6 self-end text-base font-[300] sm:flex-none md:flex-auto"
          dangerouslySetInnerHTML={{ __html: t('about.content', { interpolation: { escapeValue: true } }) }}
        ></p>
      </div>
    </section>
  );
}
