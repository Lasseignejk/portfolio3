import { FaBookOpen, FaEgg } from "react-icons/fa";

interface ProjectsNavProps {
	setAvocado: React.Dispatch<React.SetStateAction<boolean>>;
	setEgg: React.Dispatch<React.SetStateAction<boolean>>;
	setReads: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsNav = ({
	setAvocado,
	setEgg,
	setReads,
}: ProjectsNavProps): JSX.Element => {
	const showAvocado = (): void => {
		setAvocado(true);
		setEgg(false);
		setReads(false);
	};

	const showEgg = (): void => {
		setAvocado(false);
		setEgg(true);
		setReads(false);
	};

	const showReads = (): void => {
		setAvocado(false);
		setEgg(false);
		setReads(true);
	};

	return (
		<div className="px-[2rem] bg-themeLtText mt-2">
			<ul className="flex justify-around items-center text-3xl md:py-3">
				<li
					onClick={() => showAvocado()}
					className="px-4 py-1 hover:cursor-pointer hover:scale-105 duration-200 ease-in md:flex md:gap-2">
					<img
						src="avocado_green.svg"
						alt=""
						className="hidden h-[33px] lg:block"
					/>
					<img src="icon_green.png" alt="" className="h-[30px] lg:hidden" />
				</li>
				<li
					onClick={() => showEgg()}
					className="px-4 py-1 hover:cursor-pointer hover:scale-105 duration-200 ease-in  md:flex md:gap-2 md:items-center">
					<h3 className="hidden font-eggTitle font-bold text-eggText lg:block">
						The Broken Egg
					</h3>
					<span className="text-eggBackground">
						<FaEgg />
					</span>
				</li>
				<li
					onClick={() => showReads()}
					className="px-4 py-1 hover:cursor-pointer hover:scale-105 duration-200 ease-in md:flex md:gap-2 md:items-center">
					<h3 className="hidden lg:block font-readsTitle text-readsText">
						BetterReads
					</h3>
					<span className="text-readsLogo">
						<FaBookOpen />
					</span>
				</li>
			</ul>
		</div>
	);
};

export default ProjectsNav;
