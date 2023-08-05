import { ProjectCard, TitleLabel } from "../components";
import { RiLayoutMasonryLine } from "react-icons/ri";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import { PersonalProjects } from "../model/project";

const Projects = () => {
	const portfolio1Style = {
		backgroundImage: `url(${portfolio1})`,
	};
	const portfolio2Style = {
		backgroundImage: `url(${portfolio2})`,
	};
	const portfolio3Style = {
		backgroundImage: `url(${portfolio3})`,
	};

	const renderProjects = () => {
		return PersonalProjects.map((project, index) => {
			return <ProjectCard key={project.name} project={project} index={index} />;
		});
	};
	return (
		<div className="my-16 lg:my-40 porfolio-section" id="portfolio">
			<TitleLabel>
				<RiLayoutMasonryLine className="text-lg" /> PORFOLIO
			</TitleLabel>

			<h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
				Featured <span className="text-lightBlue">Projects</span>
			</h1>
			<div className="grid w-full grid-cols-1 gap-6 mt-6 sm:grid-col-1 md:grid-col2-2 lg:grid-cols-2">
				{renderProjects()}
				{/* <div className="col-span-1 lg:col-span-2">
					<div style={portfolio1Style} className="project-card">
						<div className="absolute flex items-center gap-2 tech bottom-4 left-4">
							<button type="button" className="btn btn-tech">
								Angular
							</button>
							<button type="button" className="btn btn-tech">
								Rxjs
							</button>
							<button type="button" className="btn btn-tech">
								Bootstrap
							</button>
						</div>
					</div>

					<h1 className="mt-4 text-2xl">Architecture Studio Website</h1>
				</div>

				<div>
					<div style={portfolio2Style} className="project-card">
						<div className="absolute flex items-center gap-2 tech bottom-4 left-4">
							<button type="button" className="btn btn-tech">
								React
							</button>
							<button type="button" className="btn btn-tech">
								Tailwind
							</button>
							<button type="button" className="btn btn-tech">
								PrimeReact
							</button>
						</div>
					</div>

					<h1 className="mt-4 text-2xl">Architecture Studio Website</h1>
				</div>

				<div>
					<div style={portfolio3Style} className="project-card">
						<div className="absolute flex items-center gap-2 tech bottom-4 left-4">
							<button type="button" className="btn btn-tech">
								React
							</button>
							<button type="button" className="btn btn-tech">
								Tailwind
							</button>
							<button type="button" className="btn btn-tech">
								PrimeReact
							</button>
						</div>
					</div>

					<h1 className="mt-4 text-2xl">Architecture Studio Website</h1>
				</div> */}
			</div>
		</div>
	);
};

export default Projects;
