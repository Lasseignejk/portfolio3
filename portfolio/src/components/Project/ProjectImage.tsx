import { ProjectImageProps } from "../../interfaces";
interface ImageProps {
	image: ProjectImageProps;
	border: string;
}

const ProjectImage = ({ image, border }: ImageProps) => {
	const { src, alt, style } = image;
	const imageStyleClasses =
		style == "landscape"
			? " rounded-lg w-fit h-full"
			: "rounded-lg w-fit h-full";
	return (
		<>
			<img
				src={src}
				alt={alt}
				className={`${border} ${imageStyleClasses}`}
			/>
		</>
	);
};

export default ProjectImage;
