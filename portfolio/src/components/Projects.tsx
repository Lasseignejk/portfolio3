import { projectData } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = (): JSX.Element => {
	return (
		<section
			id="Projects"
			className="min-h-screen w-full bg-themeLtBlueGray z-20 lg:pt-[3.5rem] lg:grid place-items-center">
			<div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-2">
				{projectData.map((project, index) => (
					<ProjectCard project={project} key={index} />
				))}
			</div>
		</section>
	);
};

export default Projects;
