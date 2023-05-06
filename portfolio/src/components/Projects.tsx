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
				<ProjectsNav
					setAvocado={setAvocado}
					setEgg={setEgg}
					setReads={setReads}
					avocado={avocado}
					egg={egg}
					reads={reads}
				/>
				{avocado && <Avocado />}
				{egg && <TheBrokenEgg />}
				{reads && <BetterReads />}
			</section>
		</>
	);
};

export default Projects;
