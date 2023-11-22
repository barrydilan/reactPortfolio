import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import TechStack from "./components/techStack/TechStack";

export default function App() {
	return (
		<div className="bg-main">
			<div className="md:grid md:grid-cols-2 max-w-screen-xl mx-auto">
				<Hero />
				<div className="max-w-screen-md">
					<About />
					<TechStack />
					<Projects />
				</div>
				<Footer />
			</div>
		</div>
	);
}
