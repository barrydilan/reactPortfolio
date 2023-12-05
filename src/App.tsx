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
	return (
		<Suspense fallback="loading">
      <div className="bg-main">
			<div className="md:grid md:grid-cols-2 max-w-screen-xl mx-auto lg:px-20">
				<Hero />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
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
