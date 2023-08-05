import { ProjectCard, TitleLabel } from "../components";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { PersonalProjects } from "../model/project";

const Projects = () => {
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
			</div>
		</div>
	);
};

export default Projects;
