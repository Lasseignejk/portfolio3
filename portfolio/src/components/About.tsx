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
				className="w-full min-h-screen bg-themeDkBlueGray p-[2rem] pb-16 z-20 md:pb-0 lg:pt-20">
				<header className="text-4xl font-bold text-themeYellow textShadow">
					About Me
				</header>
				<div className="">
					<div className="w-full flex justify-center py-5">
						<div className="w-2/3 md:w-1/2 lg:w-[260px]">
							<img
								src="profilePic.jpg"
								alt=""
								className="shadow-2xl rounded-[50%]"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-evenly items-center gap-[20px]">
						<p className="text-themeLtText text-xl text-center lg:w-1/2">
							I am a confident communicator and motivated developer with an eye
							for detail. I thrive in fast-paced environments and have the
							ability to remain flexible and calm under pressure.
						</p>

						<div className="mb-[20px]">
							<header className="text-3xl text-themeYellow textShadow font-bold mb-[20px] text-center">
								Tech Stack
							</header>
							<div className="flex gap-3 text-5xl flex-wrap justify-center text-themeLtText">
								<FaPython />
								<FaHtml5 />
								<FaCss3Alt />
								<FaJsSquare />
								<FaGithub />
								<FaNode />
								<SiPostgresql />
								<SiTailwindcss />
								<SiTypescript />
								<FaReact />
								<SiRedux />
								<FaDocker />
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
				</div>
			</section>
		</>
	);
};

export default About;
