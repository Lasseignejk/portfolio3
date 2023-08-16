export interface ProjectDataProps {
	project_title: string;
	logo?: string;
	title_font?: string;
	header_class: string;
	dates: string;
	tech_used: string[];
	colors_fonts: string;
	images?: ProjectImageProps[];
	border: string;
	links: ProjectLinksProps[];
	link_hover: string;
	description: string;
	role: string;
	challenges: string;
}

export interface ProjectLinksProps {
	name: string;
	address: string;
}

export interface ProjectImageProps {
	src: string;
	alt: string;
	style: "landscape" | "portrait";
}
