import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import { useEffect, useState } from "react";
import {
	ProjectDataProps,
	ProjectImageProps,
	ProjectLinksProps,
} from "../interfaces";
import ProjectTechUsed from "./ProjectTechUsed";
import ProjectLink from "./ProjectLink";
import ProjectImage from "./ProjectImage";
import ProjectSectionTitle from "./ProjectSectionTitle";

interface Months {
	[key: string]: string;
}

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
	const {
		project_title,
		logo,
		title_font,
		header_class,
		dates,
		tech_used,
		colors_fonts,
		images,
		border,
		links,
		link_hover,
		description,
		role,
		challenges,
	} = selectedProject;

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
		<div className="min-h-screen md:p-12 flex flex-col items-center bg-themeLtText">
			<div className="w-full p-5">
				<button
					onClick={() => navigate(-1)}
					className="px-3 rounded-full lg:opacity-70 hover:opacity-100 bg-themeYellow">
					Back to Projects
				</button>
			</div>
			{/* project container */}
			<div
				className={`flex flex-col w-[95%] p-4 mb-3 rounded-3xl ${colors_fonts} md:w-[90%] xl:max-w-[1200px]`}>
				{/* project title, logo */}
				<div className="flex justify-center">
					{logo ? (
						<img src={logo} alt="" className="w-[150px]" />
					) : (
						<h1 className={`text-3xl font-bold ${title_font}`}>
							{project_title}
						</h1>
					)}
				</div>
				<div className="flex flex-col gap-4 items-center">
					<p className="text-sm text-center">{formatDates(dates)}</p>
					<div className="flex gap-3">
						{links.map((link: ProjectLinksProps, index: number) => (
							<ProjectLink
								link={link}
								key={index}
								link_hover={link_hover}
								border={border}
								label={true}
							/>
						))}
					</div>
					<div className="flex gap-3 h-[110px] sm:h-[150px] md:h-[200px] lg:h-[280px] xl:h-[400px]">
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
					<div className="flex flex-col items-center gap-3">
						<div className="text-center">
							<ProjectSectionTitle title="Role" />
							<p>{role}</p>
						</div>
						<div className="text-center">
							<ProjectSectionTitle title="Challenges" />
							<p>{challenges}</p>
						</div>
						<div className="flex flex-col gap-3 items-center">
							<ProjectSectionTitle title="Built With" />
							<div className="flex flex-wrap gap-5 justify-center">
								{tech_used.map(
									(tech: string, index: number) => (
										<ProjectTechUsed
											tech={tech}
											key={index}
											label={true}
										/>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
