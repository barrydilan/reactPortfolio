import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";

export default function App() {
	return (
		<>
			<Header></Header>
			<Hero></Hero>
			<About></About>
			<Projects></Projects>
			<Footer></Footer>
		</>
	);
}
