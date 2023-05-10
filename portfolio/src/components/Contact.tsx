import { FaLinkedin } from "react-icons/fa";

const Contact = (): JSX.Element => {
	return (
		<section
			id="Contact"
			className="w-full h-screen pb-10 bg-themeBlueGray flex flex-col justify-center items-center px-[2rem] text-themeDkText relative lg:pt-20">
			{/* opacity 50 */}
			<img
				src="/circleY.png"
				alt=""
				className="absolute opacity-50 w-1/3 top-[5%] left-0 lg:hidden"
			/>
			<img
				src="/circleY.png"
				alt=""
				className="absolute opacity-50 w-1/3 left-[47%] top-0 lg:left-[65%] lg:w-1/3 lg:top-auto lg:bottom-[10%]"
			/>
			<img
				src="/circleDkBG.png"
				alt=""
				className="absolute opacity-50 w-1/4 left-[10%] top-[25%]"
			/>
			<img
				src="/circleY.png"
				alt=""
				className="absolute opacity-50 w-1/3 max-w-[200px] left-[30%] bottom-[5%] lg:top-auto lg:bottom-0 lg:max-w-[460px]"
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
				className="absolute opacity-90 w-1/4 block left-[15%] bottom-[10%] lg:hidden"
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
				className="absolute opacity-90  w-1/4 left-[65%] bottom-[10%] lg:bottom-[2%] lg:top-auto lg:max-w-[260px]"
			/>
			<img
				src="/circleDkBG.png"
				alt=""
				className="hidden absolute opacity-90 sm:max-w-[100px] left-[2%] top-[60%] lg:w-1/4 lg:top-auto lg:bottom-[5%] lg:max-w-[300px]"
			/>
			{/* circle behind the intro words */}
			<img
				src="/circleDkBG.png"
				alt=""
				className="absolute sm:w-[70%] sm:max-w-[300px] md:w-[350px] md:max-w-[400px]"
			/>
			<div className="absolute flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-3 justify-center circleTextContainer md:w-3/4">
					<h2 className="text-3xl text-themeLtText textShadow tracking-wide text-center circleIntro">
						Connect with me on LinkedIn!
					</h2>
					<div className="text-[4.5rem] text-themeLtText hover:text-themeYellow ease-in duration-200 circleIcon">
						<a href="https://www.linkedin.com/in/jayelon-lasseigne-66970a229/">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
