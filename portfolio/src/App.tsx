import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
	return (
		<>
			<Nav />
			<Home />
			<About />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
