import { useState } from "react";
import ProjectsNav from "./ProjectsNav";
import Avocado from "./Avocado";
import TheBrokenEgg from "./TheBrokenEgg";
import BetterReads from "./BetterReads";
import More from "./More";


const Projects = (): JSX.Element => {
	const [avocado, setAvocado] = useState<boolean>(true);
	const [egg, setEgg] = useState<boolean>(false);
	const [reads, setReads] = useState<boolean>(false);
	const [more, setMore] = useState<boolean>(false);
	return (
		<section
			id="Projects"
			className="w-full min-h-screen bg-themeLtBlueGray">
			<ProjectsNav
				setAvocado={setAvocado}
				setEgg={setEgg}
				setReads={setReads}
				setMore={setMore}
				avocado={avocado}
				egg={egg}
				reads={reads}
				more={more}
			/>
			{avocado && <Avocado />}
			{egg && <TheBrokenEgg />}
			{reads && <BetterReads />}
			{more && <More />}
		</section>
	);
};

export default Projects;
