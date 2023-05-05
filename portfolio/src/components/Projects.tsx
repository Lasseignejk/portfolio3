import { useState } from "react";
import ProjectsNav from "./ProjectsNav";
import Avocado from "./Avocado";
import TheBrokenEgg from "./TheBrokenEgg";
import BetterReads from "./BetterReads";

const Projects = (): JSX.Element => {
	const [avocado, setAvocado] = useState<boolean>(true);
	const [egg, setEgg] = useState<boolean>(false);
	const [reads, setReads] = useState<boolean>(false);
	return (
		<>
			<a id="Projects"></a>
			<section id="Projects" className="w-full min-h-screen bg-themeLtBlueGray">
				<header className="text-4xl font-bold text-themeTextDk textShadow pt-[2rem] pl-[2rem] lg:pt-20">
					Projects
				</header>
				<ProjectsNav
					setAvocado={setAvocado}
					setEgg={setEgg}
					setReads={setReads}
				/>
				{avocado && <Avocado />}
				{egg && <TheBrokenEgg />}
				{reads && <BetterReads />}
			</section>
		</>
	);
};

export default Projects;
