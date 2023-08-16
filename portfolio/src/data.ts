import { ProjectDataProps } from "./interfaces";

export const projectData: ProjectDataProps[] = [
	{
		project_title: "RecipeBox",
		title_font: "recipeBox_title",
		header_class: "recipeBox_header",
		dates: "07/2023 - current",
		tech_used: [
			"React",
			"Redux",
			"Typescript",
			"TailwindCSS",
			"Formik",
			"Jest",
			"Auth0",
			"MongoDB",
			"Node.js",
			"Express",
			"Figma",
			"GitHub",
		],
		colors_fonts: "recipeBox_classes",
		images: [
			{
				src: "/recipeBoxRecipesMobile.png",
				alt: "The mobile view of the 'Recipes' section on RecipeBox",
				style: "portrait",
			},
			{
				src: "/recipeBoxRecipePageMobile.png",
				alt: "A page showing more details of a recipe on mobile",
				style: "portrait",
			},
			{
				src: "/recipeBoxMealPlanningMobile.png",
				alt: "The in-progress 'Meal Planning' section on mobile",
				style: "portrait",
			},
		],
		border: "recipeBox_border",
		links: [
			{
				name: "GitHub",
				address: "https://github.com/Lasseignejk/RecipeBox-Frontend",
			},
		],
		link_hover: "recipeBox_link",
		description:
			"Tired of keeping copies of your favorite recipes in a bunch of different places? Wish you could clear out some of those bookmarked recipes from your browser? Enter RecipeBox! With RecipeBox, you can keep all your favorite recipes in one place!",
		role: "Working on a mighty team of one, I first design components in Figma before moving on to the code. I am also using Figma to organize my goals for RecipeBox so nothing is forgotten.",
		challenges:
			"Every day brings a new challenge and a new opportunity to learn. Most of my troubles come from Typescript, but I've also had challenges with Formik. Other than technology, I sometimes find it challenging to plan ahead. I design and code something out and think it's done, only to remember what I want to eventually be able to do with the component. I keep reminding myself to get the base functionality and styling down then deploy it, then come back and add those features later. ",
	},
	{
		project_title: "Open Library",
		title_font: "",
		header_class: "",
		dates: "03/2023 - current",
		tech_used: ["HTML", "LESS CSS", "Python", "Docker", "Figma", "GitHub"],
		colors_fonts: "openLibrary_classes",
		images: [
			{
				src: "/openLibraryTeamPage.png",
				alt: "A look at the redesigned 'Team Page' on Open Library",
				style: "landscape",
			},
		],
		border: "openLibrary_border",
		links: [
			{
				name: "GitHub",
				address: "https://github.com/internetarchive/openlibrary",
			},

			{
				name: "Live Site",
				address: "https://openlibrary.org/about/team",
			},
		],
		link_hover: "openLibrary_link",
		description:
			"Open Library is an open-source project aiming to create a web page for every book. In addition to browsing, patrons can also create lists with their favorite books and can even receive a virtual loan on certain books!",
		role: "My current role is helping to refactor the 'Meet the Team' page on Open Library. The original design, shown in the picture above, was one that was created by another volunteer on Figma. Now that I've finished with the initial refactoring, more members of the community have chimed in, so I'm now working on the next big design and functionality features for the page.",
		challenges:
			"One of the hardest challenges has been learning the code base. While I learned Python in my bootcamp, we only learned the basics -- I mostly use it for algorithms now. Furthermore, the CSS is handled differently than I'm used to, with imports and pathways to follow instead of simple link tags. All of this meant it was a struggle to do even the simplest of tasks, but I also learned a lot and continue to learn every time I open up the code!",
	},
	{
		project_title: "Avocado",
		logo: "/avocado_gray.svg",
		header_class: "avocado_header",
		dates: "03/2023",
		tech_used: [
			"React",
			"Redux",
			"TailwindCSS",
			"Supabase",
			"Plotly",
			"Figma",
			"GitHub",
		],
		colors_fonts: "avocado_classes",
		images: [
			{
				src: "/AvocadoManageRestaurants.png",
				alt: "The admin dashboard on Avocado",
				style: "landscape",
			},
			{
				src: "/AvocadoLogin.png",
				alt: "The login screen for Avocado",
				style: "portrait",
			},
		],
		border: "avocado_border",
		links: [
			{
				name: "GitHub",
				address: "https://github.com/Lasseignejk/Avocado-frontend",
			},
			{
				name: "YouTube",
				address: "https://www.youtube.com/watch?v=wsLZCA090U4",
			},
			{
				name: "Live Site",
				address: "https://avocado-frontend.onrender.com/",
			},
		],

		link_hover: "avocado_link",
		description:
			"Inspired by the point-of-sale software 'Toast', 'Avocado' lets restaurant owners view current orders and reports for their restaurants. Conversely, customers can view restaurants and place orders.",
		role: "As the project manager of a group of four, I participated in daily standups with my instructors and led daily standups with my team. Not	only was I in charge of the styling of Avocado, based on mockups created by my team, I also assisted and debugged code on both the front and back ends and kept everyone organized using Figma and GitHub Projects.",
		challenges:
			"One of the largest challenges I faced on Avocado was keeping the group	organized. Even though we had spent a day or two planning out the flow of the site, the styling, the database schema, and what features we wanted, when we started actually coding, we didn't know where to	start. After receiving advice from my instructor, I made a flow chart on figma and made a daily plan for what I thought we should tackle that day. My teammates were free to work on what they wanted to within that plan, and ask for help as needed. I also became more proactive in asking my teammates for updates on their progress and assisting if they were struggling.",
	},
	{
		project_title: "The Broken Egg",
		title_font: "egg_title",
		header_class: "egg_header",
		dates: "02/2023",
		tech_used: [
			"React",
			"Redux",
			"Typescript",
			"TailwindCSS",
			"Figma",
			"GitHub",
		],
		colors_fonts: "egg_classes",
		images: [
			{
				src: "/TheBrokenEggHome.png",
				alt: "The landing page for The Broken Egg",
				style: "landscape",
			},
			{
				src: "/TheBrokenEggMobileSearch.png",
				alt: "The search page for The Broken Egg on mobile",
				style: "portrait",
			},
		],
		border: "egg_border",
		links: [
			{
				name: "GitHub",
				address: "https://github.com/Lasseignejk/TheBrokenEgg",
			},
			{
				name: "Live Site",
				address: "https://thebrokenegg.onrender.com/",
			},
			{
				name: "Medium",
				address:
					"https://medium.com/@jayelonlasseigne/the-broken-egg-react-redux-typescript-project-7358591fc9e3",
			},
		],
		link_hover: "egg_link",
		description:
			"What's for dinner? On 'The Broken Egg,' you can browse recipes using a variety of different parameters and view ingredients and instructions. From classics to food from around the world, there's lots to discover on 'The Broken Egg!'",
		role: "As the sole creator, I implemented React as my frontend framework, then paired it with Redux to manage state across all of my components. I also used TypeScript to help me write more meaningful code. TypeScript also allowed me to gain a deeper understanding of React, Redux, and JavaScript, by forcing me to 'type' all of my components, variables, and functions.",
		challenges:
			"The largest challenge for this project was using TypeScript. Aside	from a few hours in class being introduced to it, I'd never used it	before. Most of my time was spent researching and asking questions to my instructor, so there were many features and things I didn't have time to add to the website. Overall though, I don't regret challenging myself to use TypeScript.",
	},
	{
		project_title: "BetterReads",
		title_font: "reads_title",
		header_class: "reads_header",
		dates: "02/2023",
		tech_used: [
			"EJS",
			"Javascript",
			"TailwindCSS",
			"Node.js",
			"Express",
			"Sequelize",
			"PostgreSQL",
			"Bcrypt",
			"Figma",
			"GitHub",
		],
		colors_fonts: "reads_classes",
		images: [
			{
				src: "/betterReadsHome.png",
				alt: "The landing page for BetterReads",
				style: "landscape",
			},
			{
				src: "/betterReadsMobile.png",
				alt: "The landing page for BetterReads on mobile",
				style: "portrait",
			},
		],
		border: "reads_border",
		links: [
			{
				name: "GitHub",
				address: "https://github.com/jessbecoding/BetterReads",
			},
			{
				name: "Live Site",
				address: "https://betterreads.onrender.com/",
			},
			{
				name: "Medium",
				address:
					"https://medium.com/@jayelonlasseigne/betterreads-my-backend-project-ef822afa7af6",
			},
		],
		link_hover: "reads_link",
		description:
			"Are you an author looking to grow your readership? Or are you a reader, searching for your next favorite book? Welcome to BetterReads, a site where you can do just that!",
		role: "					I was in charge of the frontend aspects of the project. I used Tailwind for the CSS, Figma for the objects like the bookshelf, banners, and the bookmark on the account pages, and Google Icons for	the icons on the landing and contact pages. I also assisted my partner on the backend, creating CRUD routes and helping with debugging.",
		challenges:
			"My partner and I ran into our largest challenge early on -- scaling. In the planning stage, we had a grand plan for what BetterReads would	be. But after running into problems with finding a suitable book API and issues with Sequelize, we had to pivot and narrow our focus to	something more achievable.",
	},
	{
		project_title: "Pokemon Adventure",
		title_font: "pokemon_title",
		header_class: "pokemon_header",
		dates: "11/2022",
		tech_used: ["Python"],
		colors_fonts: "pokemon_classes",
		images: [
			{
				src: "/pokemonAdventure.png",
				alt: "The beginning text of Pokemon Adventure",
				style: "landscape",
			},
		],
		border: "pokemon_border",
		links: [
			{
				name: "GitHub",
				address: "https://github.com/Lasseignejk/Pokemon-Adventure",
			},
			{
				name: "Live Site",
				address: "https://replit.com/@lasseignejk/Pokemon-Adventure",
			},
			{
				name: "Medium",
				address:
					"https://medium.com/@jayelonlasseigne/making-a-pokemon-game-using-python-3d56bd020448",
			},
		],
		link_hover: "pokemon_link",
		description:
			"Become a Pokemon trainer and go on your very own Pokemon Adventure! You can catch Pokemon in various locations, find items to keep your journey going, and can even encounter Team Rocket!",
		role: "This was a solo project at the end of the Python module in my bootcamp. I added in the basic game logic (catching Pokemon), then added more (locations, Team Rocket) based on feedback from testers.",
		challenges:
			"The hardest thing on this project was time-management. Despite my bootcamp instructor warning us not too, I was still trying to add extra functionality the day before it was due. On future projects, I would like to be better at knowing when to stop adding and instead improve what's already there.",
	},
];
