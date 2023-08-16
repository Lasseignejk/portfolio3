import { useState } from "react";
import ProjectsNav from "./ProjectsNav";
import Avocado from "./Avocado";
import TheBrokenEgg from "./TheBrokenEgg";
import BetterReads from "./BetterReads";
import More from "./More";
import { projectData } from "../data";
import ProjectCard from "./ProjectCard";
import { SiDiscover } from "react-icons/si";

const Projects = (): JSX.Element => {
	const [avocado, setAvocado] = useState<boolean>(true);
	const [egg, setEgg] = useState<boolean>(false);
	const [reads, setReads] = useState<boolean>(false);
	const [more, setMore] = useState<boolean>(false);
	return (
		<section
			id="Projects"
			className="w-full min-h-screen bg-themeLtBlueGray z-20 md:pb-3 lg:pt-[3.5rem] lg:grid place-items-center">
			{/* <ProjectsNav
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
			{more && <More />} */}
			<div className="md:grid md:grid-cols-2 lg:grid-cols-3">
				{projectData.map((project, index) => (
					<ProjectCard
						project={project}
						key={index}
						// openProject={openProject}
						// setOpenProject={setOpenProject}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
