import { ProjectDataProps, ProjectLinksProps } from "../../interfaces";

import ProjectLink from "./ProjectLink";

import ProjectTechUsed from "./ProjectTechUsed";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	project: ProjectDataProps;
}

interface Months {
	[key: string]: string;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const {
		project_title,
		logo,
		title_font,
		dates,
		tech_used,
		colors_fonts,
		description,
		link_hover,
		links,
		border,
	} = project;

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

	const formatTechUsed = (tech_used: string[]) => {
		let formattedTech = [];
		if (tech_used.length > 5) {
			formattedTech = tech_used.slice(0, 5);
			formattedTech.push("and more!");
			return formattedTech;
		}
		return tech_used;
	};

	const avocadoExtraClasses: string =
		project_title == "Avocado" ? "mb-[8px]" : "";

	return (
		<div
			className={`flex flex-col gap-2 ${colors_fonts} md:h-[380px] lg:h-[430px] xl:h-[380px] xl:rounded-2xl`}>
			<div
				className={`p-3 flex flex-col items-center gap-2

				`}>
				<div className="flex justify-between">
					<div className="flex items-center gap-5">
						{logo ? (
							<img
								src={logo}
								alt=""
								className={`w-[150px] ${avocadoExtraClasses}`}
							/>
						) : (
							<h1 className={`text-3xl font-bold ${title_font}`}>
								{project_title}
							</h1>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<p className="text-sm text-center">{formatDates(dates)}</p>
					<div className="flex gap-3 md:hidden">
						{links.map((link: ProjectLinksProps, index: number) => (
							<ProjectLink
								link={link}
								key={index}
								link_hover={link_hover}
								border={border}
								label={false}
							/>
						))}
					</div>
					<p className="text-center px-5 sm:max-w-[500px] md:h-[150px] md:max-w-[360px] lg:h-[200px] xl:h-[150px]">
						{description}
					</p>
					<div className="flex flex-col gap-1">
						<p className="text-center font-bold">Built With:</p>
						<div className="flex flex-wrap gap-5 justify-center">
							{formatTechUsed(tech_used).map(
								(tech: string, index: number) => (
									<ProjectTechUsed
										tech={tech}
										key={index}
										label={false}
									/>
								)
							)}
						</div>
					</div>
					<Link
						to={`/${project_title}`}
						className={`px-3 rounded-full hover:cursor-pointer ${border}`}>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
