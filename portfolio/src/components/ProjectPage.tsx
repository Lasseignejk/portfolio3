import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import { useEffect, useState } from "react";
import { ProjectDataProps } from "../interfaces";

const ProjectPage = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const [selectedProject, setSelectedProject] = useState<ProjectDataProps>({
		project_title: "",
		title_font: "",
		header_class: "",
		dates: "",
		tech_used: [],
		colors_fonts: "",
		images: [],
		border: "",
		links: [
			{
				name: "",
				address: "",
			},
		],
		link_hover: "",
		description: "",
		role: "",
		challenges: "",
	});
	useEffect(() => {
		handleProject();
	}, []);
	const handleProject = () => {
		let project: ProjectDataProps = {
			project_title: "",
			title_font: "",
			header_class: "",
			dates: "",
			tech_used: [],
			colors_fonts: "",
			images: [],
			border: "",
			links: [
				{
					name: "",
					address: "",
				},
			],
			link_hover: "",
			description: "",
			role: "",
			challenges: "",
		};
		projectData.map((item: ProjectDataProps) => {
			if (item.project_title == name) {
				project = item;
			}
		});
		setSelectedProject(project);
	};
	return (
		<div className="flex flex-col">
			<button onClick={() => navigate(-1)}>Back to Projects</button>
			{selectedProject?.project_title}
		</div>
	);
};

export default ProjectPage;
