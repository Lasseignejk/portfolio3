import { FaHome, FaHatWizard, FaCode, FaEnvelope } from "react-icons/fa";

const Nav = (): JSX.Element => {
	return (
		<nav className="bg-themeLtBlueGray fixed bottom-0 top-auto left-0 z-10 flex justify-evenly w-full lg:top-0 lg:bottom-auto lg:bg-navLight lg:justify-end lg:pr-2">
			<ul className="flex gap-8 justify-evenly w-full py-3 px-3 lg:justify-end">
				<a href="#Home">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem md:text-4xl lg:text-3xl">
						<FaHome />
						<p className="hidden lg:block">Home</p>
					</li>
				</a>
				<a href="#About">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem md:text-4xl lg:text-3xl">
						<FaHatWizard />
						<p className="hidden lg:block">About</p>
					</li>
				</a>
				<a href="#Projects">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem md:text-4xl lg:text-3xl">
						<FaCode />
						<p className="hidden lg:block">Projects</p>
					</li>
				</a>
				<a href="#Contact">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem md:text-4xl lg:text-3xl">
						<FaEnvelope />
						<p className="hidden lg:block">Contact</p>
					</li>
				</a>
			</ul>
		</nav>
	);
};

export default Nav;
