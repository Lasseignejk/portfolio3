import { FaGithub, FaGlobe, FaMedium, FaYoutube } from "react-icons/fa";

interface ProjectLinkProps {
	link: {
		name: string;
		address: string;
	};
	link_hover: string;
	border: string;
	label: boolean;
}

const ProjectLink = ({ link, link_hover, border, label }: ProjectLinkProps) => {
	const { name, address } = link;
	return (
		<>
			{!label && (
				<a
					href={address}
					className={`link_icons duration-200 ease-in text-xl ${link_hover} opacity-80`}>
					{name == "GitHub" && <FaGithub />}
					{name == "YouTube" && <FaYoutube />}
					{name == "Live Site" && <FaGlobe />}
					{name == "Medium" && <FaMedium />}
				</a>
			)}
			{label && (
				<a
					href={address}
					className={`link_icons duration-200 ease-in ${link_hover} opacity-80`}>
					{name}
				</a>
			)}
		</>
	);
};

export default ProjectLink;
