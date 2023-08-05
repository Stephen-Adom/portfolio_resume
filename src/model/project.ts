export type ProjectType = {
	name: string;
	description: string;
	image: string;
	gitHub_link: string;
	live_demo: string;
	tech_stacks: string[];
};

export const PersonalProjects: ProjectType[] = [
	{
		name: "Concert Hub",
		description:
			"Concert Hub is a web application developed using React and Ruby on Rails that aims to provide music enthusiasts with a comprehensive platform to discover, explore, and book tickets for their favourite concerts and live music events. The application brings together a user-friendly interface, personalized recommendations, and seamless concert booking functionalities to enhance the concert-going experience for users.",
		image:
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zfvolfhyej9odbupxqgp",
		gitHub_link: "https://github.com/Stephen-Adom/concert-react-front-end",
		live_demo: "https://concert-react-front-end.vercel.app/",
		tech_stacks: ["ReactJS", "Ruby on Rails", "Git", "Tailwind CSS"],
	},
	{
		name: "Country Explorer",
		description:
			"A responsive web app that provides information about countries from around the world. The app’s standout feature is its colour theme switcher, providing a personalized user experience. The app is optimized for efficiency and ease of use, making it a valuable resource for users",
		image:
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/hxgroedcqvb9htabd970",
		gitHub_link: "https://github.com/Stephen-Adom/rest-countries",
		live_demo: "https://stephen-adom.github.io/rest-countries",
		tech_stacks: ["HTML 5", "Tailwind CSS", "Typescript", "RxJS", "Webpack 5"],
	},
	{
		name: "LeaderBoard",
		description:
			"The leaderboard website displays scores submitted by different players. It also allows you to submit your score. A full responsive website developed using webpack and ES6 Syntax",
		image:
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/upvyw1ocbpkhdbxymqeq",
		gitHub_link: "https://github.com/Stephen-Adom/leaderboard",
		live_demo: "https://leaderboard-smoky.vercel.app/",
		tech_stacks: ["HTML 5", "CSS 3", "Bootstrap", "Javascript", "Webpack 5"],
	},
	{
		name: "Rock Paper Scissor, Lizard and Spock",
		description:
			"The Rock, paper, scissors, Spock game project is a web-based game that provides an interactive experience for users. Built using the React library, Tailwind CSS, PrimeReact, and TypeScript, the project offers a highly responsive and modern user interface. The game allows users to play the classic rock, paper, scissors game with the added twist of Spock and Lizard. Users play against the computer, check the game's rules and keep track of scores for each player.",
		image:
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/zdu52fbkrzeouumfwpbx",
		gitHub_link: "https://github.com/Stephen-Adom/rock-paper-scissor-lizard-spock-game",
		live_demo: "https://rock-paper-scissor-lizard-spock-game-seven.vercel.app/",
		tech_stacks: ["ReactJS", "Tailwind CSS", "PrimeReact", "Typescript", "Flexbox", "CSS Grid"],
	},
	{
		name: "Covidio",
		description:
			"Covido is an app designed to help users stay up-to-date on the latest COVID-19 statistics from around the world",
		image:
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/jybqvb9ljsrunthxxahz",
		gitHub_link: "https://github.com/Stephen-Adom/covidio",
		live_demo: "https://covidio.vercel.app/",
		tech_stacks: ["ReactJS", "Tailwind CSS", "PrimeReact"],
	},

	{
		name: "Movie-verse",
		description:
			"Movieverse curates movies for movie lovers; they can see, search, comment, and see ratings of their favourite movies. A fully responsive website developed using Webpack and ES6 Syntax",
		image:
			"https://res.cloudinary.com/dt8tdf7uu/image/upload/f_auto,q_auto/v1/portfolio/indtlem0poorqoxt3otp",
		gitHub_link: "https://github.com/adamilare/movieverse",
		live_demo: "https://adamilare.github.io/movieverse/dist/",
		tech_stacks: ["HTML 5", "Bootstrap 5", "CSS 3", "Javascript", "Webpack 5"],
	},
];
