import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";
import TechStack from "./pages/techStack/TechStack";

export default function App() {
	return (
		<div className="bg-main">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
		</div>
	);
}
