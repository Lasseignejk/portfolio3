interface ProjectSectionTitleProps {
	title: string;
}
const ProjectSectionTitle = ({
	title,
}: ProjectSectionTitleProps): JSX.Element => {
	return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default ProjectSectionTitle;
