import ProjectCard from "./ProjectCard";
import { projectData } from "../data";
import { useState } from "react";

interface OpenProjectState {
	[key: string]: boolean;
}

const More = () => {
	const [openProject, setOpenProject] = useState<OpenProjectState>({
		Avocado: false,
		"The Broken Egg": false,
		BetterReads: false,
	});
	return (
		<div>
			{projectData.map((project, index) => (
				<ProjectCard
					project={project}
					key={index}
					openProject={openProject}
					setOpenProject={setOpenProject}
				/>
			))}
		</div>
	);
};

export default More;
