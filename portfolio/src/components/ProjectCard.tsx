import {
	ProjectDataProps,
	ProjectImageProps,
	ProjectLinksProps,
} from "../interfaces";
import { FaCaretDown } from "react-icons/fa";
import ProjectLink from "./ProjectLink";
import ProjectSectionTitle from "./ProjectSectionTitle";
import ProjectImage from "./ProjectImage";
import ProjectTechUsed from "./ProjectTechUsed";

interface ProjectCardProps {
	project: ProjectDataProps;
	openProject: OpenProjectState;
	setOpenProject: React.Dispatch<React.SetStateAction<OpenProjectState>>;
}

interface OpenProjectState {
	[key: string]: boolean;
}

interface Months {
	[key: string]: string;
}

const ProjectCard = ({
	project,
	openProject,
	setOpenProject,
}: ProjectCardProps) => {
	const {
		project_title,
		logo,
		title_font,
		header_class,
		dates,
		tech_used,
		colors_fonts,
		images,
		description,
		role,
		challenges,
		link_hover,
		links,
		border,
	} = project;

	const openProjectClasses: string =
		openProject[project_title] == true ? "flex flex-col gap-3" : "hidden";

	const openProjectButtonClasses: string =
		openProject[project_title] == true ? "rotate-180" : "";

	const handleClick = (title: string) => {
		setOpenProject((prevState) => ({
			...prevState,
			[title]: !prevState[title],
		}));
	};
	const openProjectHeaderClasses =
		openProject[project_title] == true ? header_class : "";

	const formatDates = (date: string) => {
		const months: Months = {
			"01": "January",
			"02": "February",
			"03": "March",
			"04": "April",
			"05": "May",
			"06": "June",
			"07": "July",
			"08": "August",
			"09": "September",
			"10": "October",
			"11": "November",
			"12": "December",
		};
		const splitDate = date.split("/");
		const formattedDate = months[splitDate[0]] + " " + [splitDate[1]];
		return formattedDate;
	};

	return (
		<div className={`flex flex-col gap-2 ${colors_fonts}`}>
			<div
				className={`p-3 flex flex-col gap-5 hover:cursor-pointer ${openProjectHeaderClasses}`}
				onClick={() => handleClick(project_title)}>
				<div className="flex justify-between">
					<div className="flex items-center gap-5">
						{logo ? (
							<img src={logo} alt="" className="w-[150px]" />
						) : (
							<h1 className={`text-3xl font-bold ${title_font}`}>
								{project_title}
							</h1>
						)}
						<div className="gap-3 hidden md:flex">
							{links.map(
								(link: ProjectLinksProps, index: number) => (
									<ProjectLink
										link={link}
										key={index}
										link_hover={link_hover}
										border={border}
									/>
								)
							)}
						</div>
					</div>
					<button className={`text-2xl ${openProjectButtonClasses}`}>
						<FaCaretDown />
					</button>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">{formatDates(dates)}</p>
					<div className="flex gap-3 md:hidden">
						{links.map((link: ProjectLinksProps, index: number) => (
							<ProjectLink
								link={link}
								key={index}
								link_hover={link_hover}
								border={border}
							/>
						))}
					</div>
					<p className="">{description}</p>
					<div className="flex gap-5">
						<p className="flex w-1/4 md:w-auto items-center font-bold">
							Built With:
						</p>
						<div className="flex flex-wrap gap-5 w-2/3 md:w-auto justify-center md:justify-start">
							{tech_used.map((tech: string, index: number) => (
								<ProjectTechUsed
									tech={tech}
									key={index}
									label={false}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div
				className={`p-3 flex flex-col items-center md:items-start ${openProjectClasses} md:max-w-[1100px]`}>
				<div className="flex gap-3 h-[110px] sm:h-[150px] md:h-[260px] lg:h-[300px] xl:h-[400px]">
					{images &&
						images.map(
							(image: ProjectImageProps, index: number) => (
								<ProjectImage
									image={image}
									key={index}
									border={border}
								/>
							)
						)}
				</div>

				{/* <div>
					<ProjectSectionTitle title="Description" />
					<p>{description}</p>
				</div> */}
				<div>
					<ProjectSectionTitle title="Role" />
					<p>{role}</p>
				</div>
				<div>
					<ProjectSectionTitle title="Challenges" />
					<p>{challenges}</p>
				</div>
				<div className="flex flex-col gap-3">
					<ProjectSectionTitle title="Built With" />
					<div className="flex flex-wrap gap-5">
						{tech_used.map((tech: string, index: number) => (
							<ProjectTechUsed
								tech={tech}
								key={index}
								label={true}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
