import { KeyboardEvent } from "react";
import { FaBookOpen, FaEgg, FaPlus } from "react-icons/fa";

interface ProjectsNavProps {
	avocado: boolean;
	setAvocado: React.Dispatch<React.SetStateAction<boolean>>;
	egg: boolean;
	setEgg: React.Dispatch<React.SetStateAction<boolean>>;
	reads: boolean;
	setReads: React.Dispatch<React.SetStateAction<boolean>>;
	more: boolean;
	setMore: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectsNav = ({
	avocado,
	egg,
	reads,
	more,
	setAvocado,
	setEgg,
	setReads,
	setMore,
}: ProjectsNavProps): JSX.Element => {
	const showAvocado = (): void => {
		setAvocado(true);
		setEgg(false);
		setReads(false);
		setMore(false); 
	};

	const showEgg = (): void => {
		setAvocado(false);
		setEgg(true);
		setReads(false);
		setMore(false); 
	};

	const showReads = (): void => {
		setAvocado(false);
		setEgg(false);
		setReads(true);
		setMore(false); 

	};

	const showMore = (): void => {
		setAvocado(false);
		setEgg(false);
		setReads(false)
		setMore(true) 
	}

	const handleShowAvocado = (e: KeyboardEvent<HTMLLIElement>): void => {
		if (e.key === "Enter") {
			showAvocado();
		}
	};
	const handleShowEgg = (e: KeyboardEvent): void => {
		if (e.key === "Enter") {
			showEgg();
		}
	};

	const handleShowReads = (e: KeyboardEvent): void => {
		if (e.key === "Enter") {
			showReads();
		}
	};
	const handleShowMore = (e: KeyboardEvent): void => {
		if (e.key === "Enter") {
			showMore();
		}
	};

	// const inputReference = useRef<HTMLLIElement>(null);

	// useEffect(() => {
	// 	if (inputReference.current != null) {
	// 		inputReference.current.focus();
	// 	}
	// }, []);

	return (
		<nav
			aria-label="secondary"
			className="px-[2rem] bg-themeLtText py-2 lg:py-0 lg:pt-[3.7rem]">
			<ul className="flex justify-around items-center	 text-3xl md:py-3">
				<li
					tabIndex={0}
					onKeyDown={handleShowAvocado}
					onClick={() => showAvocado()}
					className={`px-4 py-2 hover:cursor-pointer hover:scale-105 duration-200 ease-in hover:bg-avocadoText focus:bg-avocadoText md:flex md:gap-2  rounded-full ${
						avocado ? "bg-avocadoText" : ""
					}`}>
					<img
						src="avocado_green.svg"
						alt=""
						className="hidden h-[33px] lg:block"
					/>
					<img src="icon_green.png" alt="" className="h-[30px] lg:hidden" />
				</li>
				<li
					tabIndex={0}
					onKeyDown={handleShowEgg}
					onClick={() => showEgg()}
					className={`px-4 py-1 hover:cursor-pointer hover:scale-105 duration-200 ease-in focus:bg-eggBackground2 hover:bg-eggBackground2 rounded-full md:flex md:gap-2 md:items-center ${
						egg ? "bg-eggBackground2" : ""
					}`}>
					<h3 className="hidden font-eggTitle font-bold text-eggText lg:block">
						The Broken Egg
					</h3>
					<span className="text-eggBackground">
						<FaEgg />
					</span>
				</li>
				<li
					tabIndex={0}
					onKeyDown={handleShowReads}
					onClick={() => showReads()}
					className={`px-4 py-1 hover:cursor-pointer hover:scale-105 duration-200 ease-in hover:bg-readsBackground focus:bg-readsBackground rounded-full md:flex md:gap-2 md:items-center ${
						reads ? "bg-readsBackground" : ""
					}`}>
					<h3 className="hidden lg:block font-readsTitle text-readsText">
						BetterReads
					</h3>
					<span className="text-readsLogo">
						<FaBookOpen />
					</span>
				</li>
				<li
					tabIndex={0}
					onKeyDown={handleShowMore}
					onClick={() => showMore()}
					className={`px-4 py-1 hover:cursor-pointer hover:scale-105 duration-200 ease-in hover:bg-themeYellow focus:bg-themeYellow rounded-full md:flex md:gap-2 md:items-center ${
						more ? "bg-themeYellow" : ""
					}`}>
					<h3 className="hidden lg:block">
						More
					</h3>
					<span className="text-themeDkText">
						<FaPlus />
					</span>
				</li>
			</ul>
		</nav>
	);
};

export default ProjectsNav;
