import {
	FaJsSquare,
	FaHtml5,
	FaCss3Alt,
	FaGithub,
	FaReact,
	FaPython,
	FaNode,
	FaDocker,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiTypescript,
	SiPostgresql,
	SiRedux,
} from "react-icons/si";

const About = (): JSX.Element => {
	return (
		<>
			<a id="About"></a>
			<section
				id="About"
				className="w-full h-screen bg-themeDkBlueGray p-[2rem] pb-16 z-20 md:pb-0">
				<header className="text-4xl font-bold text-themeYellow textShadow">
					About Me
				</header>
				<div className="flex flex-col justify-evenly gap-[20px]">
					<p className="text-themeLtText text-xl">
						I am a confident communicator and motivated developer with an eye
						for detail. I thrive in fast-paced environments and have the ability
						to remain flexible and calm under pressure.
					</p>

					<div className="mb-[20px]">
						<header className="text-3xl text-themeYellow textShadow font-bold mb-[20px]">
							Tech Stack
						</header>
						<div className="flex gap-3 text-5xl flex-wrap justify-center text-themeLtText">
							<FaJsSquare />
							<FaHtml5 />
							<FaCss3Alt />
							<FaGithub />
							<FaReact />
							<FaPython />
							<FaNode />
							<FaDocker />
							<SiTailwindcss />
							<SiTypescript />
							<SiPostgresql />
							<SiRedux />
						</div>
					</div>
					<div className="flex text-center justify-center items-center gap-3">
						<a
							href="../../resume/JayelonLasseigneResume.pdf"
							download
							className="">
							<p className="text-themeLtText bg-themeDkText text-2xl border-2 px-3 py-3 rounded-full hover:text-themeDkText hover:bg-themeYellow duration-200 ease-in m-0">
								Download my resume
							</p>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
