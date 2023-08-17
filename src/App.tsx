import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";

export default function App() {
	return (
		<div className="bg-blue-500 h-full">
			<Header></Header>
			<main>
				<Hero></Hero>
				<About></About>
				<Projects></Projects>
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
}
