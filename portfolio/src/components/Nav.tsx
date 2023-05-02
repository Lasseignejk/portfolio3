import { FaHome, FaHatWizard, FaCode, FaEnvelope } from "react-icons/fa";

const Nav = (): JSX.Element => {
	return (
		<nav className="bg-themeLtBlueGray fixed bottom-0 top-auto left-0 z-10 flex justify-evenly w-full md:w-[calc(100%-18px)] md:top-0 md:bottom-auto md:bg-navTransparent lg:justify-end">
			<ul className="flex gap-8 justify-evenly w-full py-3 px-3 lg:justify-end">
				<a href="#Home">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
						<FaHome />
						<p className="hidden md:block">Home</p>
					</li>
				</a>
				<a href="#About">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
						<FaHatWizard />
						<p className="hidden md:block">About</p>
					</li>
				</a>
				<a href="#Projects">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
						<FaCode />
						<p className="hidden md:block">Projects</p>
					</li>
				</a>
				<a href="#Contact">
					<li className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
						<FaEnvelope />
						<p className="hidden md:block">Contact</p>
					</li>
				</a>
			</ul>
		</nav>
	);
};

export default Nav;
