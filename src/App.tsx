import { useTranslation } from "react-i18next";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import TechStack from "./components/techStack/TechStack";
import { Suspense } from "react";

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

export default function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

	return (
		<Suspense fallback="loading">
      <div className="bg-main">
			<div className="md:grid md:grid-cols-2 max-w-screen-lg mx-auto lg:px-4">
				<Hero changeLanguage={changeLanguage} lngs={lngs} i18n={i18n}  />
				<div className="max-w-screen-md">
					<About />
					<TechStack />
					<Projects />
				</div>
				<Footer />
			</div>
		</div>
    </Suspense>
	);
}
