export type ProjectType = {
	name: string;
	description: string;
	image: string;
	gitHub_link: string;
	live_demo: string;
	tech_stacks: string[];
	screenshots: string[];
};

export const PersonalProjects: ProjectType[] = [
	{
		name: "Socialis (In Development)",
		description: "A social platform to connect with friends and family, even with coworkers. Manage all you social account in one place. Built with angular, nx and tailwind",
		image: "https://res.cloudinary.com/dt8tdf7uu/image/upload/v1705674844/portfolio/zj6ddset27zthmk1ok4c.png",
		gitHub_link: "https://github.com/Stephen-Adom/socialis-client",
		live_demo: "",
		tech_stacks: ["Angular", "Spring boot", "Spring Security", "Websocket", "PrimeNg", "Git", "Tailwind CSS"],
		screenshots: [
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/v1705674844/portfolio/zj6ddset27zthmk1ok4c.png",
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/v1705674837/portfolio/rzvtfe1okbkiqkhnsfrq.png",
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/v1705674834/portfolio/bdyamd9otya7ghfwmfjz.png",
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/v1705674818/portfolio/v5mnw97eqqjcr1482xql.png",
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/v1705674811/portfolio/dgvostndbhfm9abbveon.png",
		],
	},

	{
		name: "Concert Hub",
		description: "Concert Hub is a web application developed using React and Ruby on Rails that aims to provide music enthusiasts with a comprehensive platform to discover, explore, and book tickets for their favourite concerts and live music events. The application brings together a user-friendly interface, personalized recommendations, and seamless concert booking functionalities to enhance the concert-going experience for users.",
		image: "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zfvolfhyej9odbupxqgp",
		gitHub_link: "https://github.com/Stephen-Adom/concert-react-front-end",
		live_demo: "https://concert-react-front-end.vercel.app/",
		tech_stacks: ["ReactJS", "Ruby on Rails", "Git", "Tailwind CSS"],
		screenshots: ["https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zfvolfhyej9odbupxqgp", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/kmffp9lr6nfqkigqxb4t", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/yg3asbnwwncirrpisly1"],
	},
	{
		name: "Country Explorer",
		description: "A responsive web app that provides information about countries from around the world. The app’s standout feature is its colour theme switcher, providing a personalized user experience. The app is optimized for efficiency and ease of use, making it a valuable resource for users",
		image: "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/hxgroedcqvb9htabd970",
		gitHub_link: "https://github.com/Stephen-Adom/rest-countries",
		live_demo: "https://stephen-adom.github.io/rest-countries",
		tech_stacks: ["HTML 5", "Tailwind CSS", "Typescript", "RxJS", "Webpack 5"],
		screenshots: ["https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/hxgroedcqvb9htabd970", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zwjhu6axtlbgpaqustg8", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/ggnvegjhn3esi1ptig92"],
	},
	{
		name: "LeaderBoard",
		description: "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. A full responsive website developed using webpack and ES6 Syntax",
		image: "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/upvyw1ocbpkhdbxymqeq",
		gitHub_link: "https://github.com/Stephen-Adom/leaderboard",
		live_demo: "https://leaderboard-smoky.vercel.app/",
		tech_stacks: ["HTML 5", "CSS 3", "Bootstrap", "Javascript", "Webpack 5"],
		screenshots: ["https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/upvyw1ocbpkhdbxymqeq", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/pxx6af7esepdezkccnns"],
	},
	{
		name: "Rock Paper Scissor, Lizard and Spock",
		description: "The Rock, paper, scissors, Spock game project is a web-based game that provides an interactive experience for users. Built using the React library, Tailwind CSS, PrimeReact, and TypeScript, the project offers a highly responsive and modern user interface. The game allows users to play the classic rock, paper, scissors game with the added twist of Spock and Lizard. Users play against the computer, check the game's rules and keep track of scores for each player.",
		image: "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zdu52fbkrzeouumfwpbx",
		gitHub_link: "https://github.com/Stephen-Adom/rock-paper-scissor-lizard-spock-game",
		live_demo: "https://rock-paper-scissor-lizard-spock-game-seven.vercel.app/",
		tech_stacks: ["ReactJS", "Tailwind CSS", "PrimeReact", "Typescript", "Flexbox", "CSS Grid"],
		screenshots: ["https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zdu52fbkrzeouumfwpbx", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/xlpgozgdha05skpjsljs", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/bczwiuk631omoenm9fni"],
	},
	{
		name: "Covidio",
		description: "Covido is an app designed to help users stay up-to-date on the latest COVID-19 statistics from around the world",
		image: "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/jybqvb9ljsrunthxxahz",
		gitHub_link: "https://github.com/Stephen-Adom/covidio",
		live_demo: "https://covidio.vercel.app/",
		tech_stacks: ["ReactJS", "Tailwind CSS", "PrimeReact"],
		screenshots: ["https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/jybqvb9ljsrunthxxahz", "https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/vl4ckpyksn5cr39pcjf3"],
	},
];
