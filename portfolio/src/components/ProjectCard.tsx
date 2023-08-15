import { ProjectDataProps } from "../interfaces";
import { FaCaretDown } from "react-icons/fa";

interface ProjectCardProps {
	project: ProjectDataProps;
	openProject: OpenProjectState;
	setOpenProject: React.Dispatch<React.SetStateAction<OpenProjectState>>;
}

interface OpenProjectState {
	[key: string]: boolean;
}

const ProjectCard = ({
	project,
	openProject,
	setOpenProject,
}: ProjectCardProps) => {
	const { project_title, logo, title_font, dates, tech_used, colors_fonts } =
		project;

	const openProjectClasses: string =
		openProject[project_title] == true ? "flex flex-col gap-3" : "hidden";

	const openProjectButtonClasses: string =
		openProject[project_title] == true ? "rotate-180" : "";

	const handleClick = (title: string) => {
		console.log("title", title);
		setOpenProject((prevState) => ({
			...prevState,
			[title]: !prevState[title],
		}));
		console.log(openProject);
	};
	return (
		<div className={`p-3 flex flex-col gap-2 ${colors_fonts}`}>
			<div
				className="flex justify-between hover:cursor-pointer"
				onClick={() => handleClick(project_title)}>
				{logo ? (
					<img src={logo} alt="" className="w-[150px]" />
				) : (
					<h1 className={`text-3xl font-bold ${title_font}`}>
						{project_title}
					</h1>
				)}
				<button className={`text-2xl ${openProjectButtonClasses}`}>
					<FaCaretDown />
				</button>
			</div>

			<div className={`${openProjectClasses}`}>
				{dates}
				<div>
					{tech_used.map((tech: string, index: number) => (
						<span key={index}>{tech}</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
