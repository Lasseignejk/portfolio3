import { ReactNode } from "react";
import { FaCode, FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import {
	SiAuth0,
	SiDocker,
	SiExpress,
	SiJavascript,
	SiJest,
	SiLess,
	SiMongodb,
	SiNodedotjs,
	SiPlotly,
	SiPostgresql,
	SiPython,
	SiRedux,
	SiSequelize,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

interface ProjectTechUsedProps {
	tech: string;
	label: boolean;
}

interface IconsData {
	[key: string]: ReactNode;
}

const ProjectTechUsed = ({
	tech,
	label,
}: ProjectTechUsedProps): JSX.Element => {
	const handleIcon = (tech: string): ReactNode => {
		const icons: IconsData = {
			Auth0: <SiAuth0 />,
			Docker: <SiDocker />,
			Express: <SiExpress />,
			Figma: <FaFigma />,
			GitHub: <FaGithub />,
			HTML: <FaHtml5 />,
			Javascript: <SiJavascript />,
			Jest: <SiJest />,
			"LESS CSS": <SiLess />,
			MongoDB: <SiMongodb />,
			"Node.js": <SiNodedotjs />,
			Plotly: <SiPlotly />,
			PostgreSQL: <SiPostgresql />,
			Python: <SiPython />,
			React: <FaReact />,
			Redux: <SiRedux />,
			Sequelize: <SiSequelize />,
			Supabase: <SiSupabase />,
			TailwindCSS: <SiTailwindcss />,
			Typescript: <SiTypescript />,
			"and more!": "and more!",
		};
		return icons[tech] ? icons[tech] : <FaCode />;
	};

	const noLabelClasses: string = !label ? "h-[30px]" : "";
	return (
		<div
			className={`flex flex-col text-center items-center justify-center text-xl ${noLabelClasses}`}>
			{handleIcon(tech)}
			{label && <p>{tech}</p>}
		</div>
	);
};

export default ProjectTechUsed;
