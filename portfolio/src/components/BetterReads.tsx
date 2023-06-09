import { FaGithub, FaFigma, FaJsSquare, FaCode } from "react-icons/fa";
import {
	SiTailwindcss,
	SiMedium,
	SiExpress,
	SiNodedotjs,
	SiSequelize,
	SiPostgresql,
} from "react-icons/si";

const BetterReads = (): JSX.Element => {
	return (
		<div className="bg-readsBackground px-[2rem] pb-[2rem] pt-4 text-readsText flex flex-col gap-3 items-center lg:px-[10%]">
			<h1 className="font-readsTitle text-3xl">BetterReads</h1>
			<div className="flex justify-center items-center gap-3 h-[110px] sm:h-[150px] md:h-[260px] lg:h-[300px] xl:h-[400px]">
				<img
					src="/betterReadsHome.png"
					alt="The landing page for BetterReads"
					className="border-2 border-readsText rounded-lg w-fit h-full"
				/>
				<img
					src="/betterReadsMobile.png"
					alt="The landing page for BetterReads on Mobile"
					className="border-2 border-readsText rounded-lg w-fit h-full"
				/>
			</div>
			<div className="flex justify-center gap-10 text-4xl text-readsText">
				<a
					href="https://github.com/jessbecoding/BetterReads"
					className="px-2 py-2 rounded-full hover:scale-125 duration-200 ease-in hover:bg-readsLogo">
					<FaGithub />
				</a>
				<a
					href="https://medium.com/@jayelonlasseigne/betterreads-my-backend-project-ef822afa7af6"
					className="px-2 py-2 rounded-full hover:scale-125 duration-200 ease-in hover:bg-readsLogo">
					<SiMedium />
				</a>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-readsTitle text-center">Description</h3>
				<p className="font-readsText text-center">
					Are you an author looking to grow your readership? Or are you a
					reader, searching for your next favorite book? Welcome to BetterReads,
					a site where you can do just that!
				</p>
				<p className="font-readsText text-center">
					BetterReads was created to help connect authors and readers together.
					Authors can upload information on their books to the site and can post
					events like book signings or Q&As. Readers can then browse those
					events and attend ones they are interested in. They can also browse
					books in search of their next literary quest!
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-readsTitle text-center">Role</h3>
				<p className="font-readsText text-center">
					I was in charge of the frontend aspects of the project. I used
					Tailwind for the CSS, Figma for the objects like the bookshelf,
					banners, and the bookmark on the account pages, and Google Icons for
					the icons on the landing and contact pages. I also assisted my partner
					on the backend, creating CRUD routes and helping with debugging.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-readsTitle text-center">Challenges</h3>
				<p className="font-readsText text-center">
					My partner and I ran into our largest challenge early on -- scaling.
					In the planning stage, we had a grand plan for what BetterReads would
					be. But after running into problems with finding a suitable book API
					and issues with Sequelize, we had to pivot and narrow our focus to
					something more achievable.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-readsTitle mb-3 text-center">
					Built With
				</h3>
				<div className="flex justify-evenly flex-wrap gap-5 font-readsText">
					<div className="flex flex-col text-center items-center text-xl">
						<FaCode />
						<p>EJS</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<FaJsSquare />
						<p>JavaScript</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiTailwindcss />
						<p>TailwindCSS</p>
					</div>

					<div className="flex flex-col text-center items-center text-xl">
						<SiNodedotjs />
						<p>Node.js</p>
					</div>

					<div className="flex flex-col text-center items-center text-xl">
						<SiExpress />
						<p>Express</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiSequelize />
						<p>Sequelize</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiPostgresql />
						<p>PostgreSQL</p>
					</div>

					<div className="flex flex-col text-center items-center text-xl">
						<FaCode />
						<p>Bcrypt</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<FaGithub />
						<p>GitHub</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<FaFigma />
						<p>Figma</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BetterReads;
