import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProjectPage from "./components/Project/ProjectPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path=":name" element={<ProjectPage />} />
		</Routes>
	);
}

export default App;
