import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = (): JSX.Element => {
	return (
		<>
			<a id="Home"></a>
			<section
				id="Home"
				className="w-full h-screen bg-themeBlueGray flex flex-col justify-center items-center gap-[30px]relative pb-16 overflow-hidden md:pb-0">
				{/* opacity 50 */}
				<img
					src="/circleY.png"
					alt=""
					className="absolute opacity-50 w-1/3 top-[5%] left-0 lg:hidden"
				/>
				<img
					src="/circleY.png"
					alt=""
					className="absolute opacity-50 w-1/2 left-[47%] top-0 lg:left-[65%] lg:w-1/3 lg:top-auto lg:bottom-[10%]"
				/>
				<img
					src="/circleDkBG.png"
					alt=""
					className="absolute opacity-50 w-1/4 left-[10%] top-[25%]"
				/>
				<img
					src="/circleY.png"
					alt=""
					className="absolute opacity-50 w-1/3 left-[30%] top-[75%] lg:top-auto lg:bottom-0 lg:max-w-[460px]"
				/>
				{/* opacity 90 */}
				<img
					src="/circleY.png"
					alt=""
					className="absolute top-[5%] opacity-90 w-1/5 block left-[70%] xl:w-[15%] xl:left-[75%]"
				/>
				<img
					src="/circleDkBG.png"
					alt=""
					className="absolute opacity-90 w-1/6 block top-[3%]"
				/>
				<img
					src="/circleDkBG.png"
					alt=""
					className="absolute opacity-90 w-1/4 block left-[15%] top-[78%] lg:hidden"
				/>
				<img
					src="/circleY.png"
					alt=""
					className="absolute opacity-90 w-1/4 block left-[3%] top-[25%] lg:top-0 lg:left-0"
				/>
				<img
					src="/circleDkBG.png"
					alt=""
					className="absolute opacity-90 w-1/6 left-[80%] top-[70%] lg:top-[50%]"
				/>
				<img
					src="/circleDkBG.png"
					alt=""
					className="absolute opacity-90  w-1/5 left-[10%] top-[10%] lg:top-[10%] lg:left-10%] "
				/>
				<img
					src="/circleY.png"
					alt=""
					className="absolute opacity-90  w-1/4 left-[65%] top-[80%] lg:bottom-[2%] lg:top-auto lg:max-w-[260px]"
				/>
				<img
					src="/circleDkBG.png"
					alt=""
					className="absolute opacity-90  w-1/3 left-[2%] top-[60%] lg:w-1/4 lg:top-auto lg:bottom-[5%] lg:max-w-[300px]"
				/>
				{/* circle behind the intro words */}
				<img
					src="/circleY.png"
					alt=""
					className="absolute sm:w-[90%] md:w-[550px]"
				/>
				<div className="absolute flex flex-col justify-center items-center gap-10">
					<div className="flex flex-col gap-3">
						<h1 className="text-5xl text-themeDkText textShadow  tracking-wide text-center">
							Hi there!
						</h1>
						<h2 className="text-3xl text-themeDkText textShadow tracking-wide text-center">
							I'm Jaye, a software developer.
						</h2>
					</div>
					<div className="flex gap-14">
						<div className="text-[4.5rem] text-themeDkText hover:text-themeDkBlueGray ease-in duration-200">
							<a href="https://github.com/Lasseignejk">
								<FaGithub />
							</a>
						</div>
						<div className="text-[4.5rem] text-themeDkText hover:text-themeDkBlueGray ease-in duration-200">
							<a href="https://www.linkedin.com/in/jayelon-lasseigne-66970a229/">
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
