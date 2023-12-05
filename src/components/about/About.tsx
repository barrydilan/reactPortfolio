import SectionTitle from "../../shared/SectionTitle";
import profileImg from "../../assets/img/photo.jpeg";
import { t } from "i18next";

export default function About() {
	return (
		<section className="mt-16 p-6 sm:p-10">
			<SectionTitle>{t("about.sectionTitle")}</SectionTitle>
			<div className="mt-6 flex flex-col items-center md:items-start gap-5">
				<div className="sm:grow md:flex md:flex-col">
					<div className="bg-primary rounded-full w-40 h-40 mt-6 mx-auto md:max-w-[200px] md:max-h-[200px]"><img className="w-full h-full object-cover rounded-full" src={profileImg} alt="" /></div>
				</div>
				<p className="text-base font-[300] mt-6 sm:flex-none md:flex-auto self-end" dangerouslySetInnerHTML={{ __html: t('about.content', {interpolation: {escapeValue: true}}) }} >
				</p>
			</div>
		</section>
	);
}
