import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";

export default function App() {
	return (
		<div className="bg-blue-600">
      <Hero />
      <About />
      <Projects />
      <Footer />
		</div>
	);
}
