import { FaGithub, FaGlobe, FaMedium, FaYoutube } from "react-icons/fa";

interface ProjectLinkProps {
	link: {
		name: string;
		address: string;
	};
	link_hover: string;
	border: string;
}

const ProjectLink = ({ link, link_hover, border }: ProjectLinkProps) => {
	const { name, address } = link;
	return (
		<>
			<a
				href={address}
				className={`link_icons duration-200 ease-in text-xl ${link_hover} opacity-80 md:hidden`}>
				{name == "GitHub" && <FaGithub />}
				{name == "YouTube" && <FaYoutube />}
				{name == "Live Site" && <FaGlobe />}
				{name == "Medium" && <FaMedium />}
			</a>
			<a
				href={address}
				className={`link_icons duration-200 ease-in text-sm ${link_hover} opacity-60 hidden md:block`}>
				{name}
			</a>
		</>
	);
};

export default ProjectLink;
