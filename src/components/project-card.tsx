import { ProjectType } from "../model/project";

type propType = {
	project: ProjectType;
	index: number;
};

const ProjectCard = ({ project, index }: propType) => {
	return (
		<div className={`${(index === 0 || index === 5) && "col-span-1 lg:col-span-2"}`}>
			<div
				style={{ backgroundImage: `url(${project.image})` }}
				className={`project-card cursor-pointer`}
			>
				<div className="absolute flex items-center flex-wrap gap-2 tech bottom-4 left-4">
					{project.tech_stacks.length &&
						project.tech_stacks.map((tech) => {
							return (
								<button type="button" className="btn btn-tech" key={tech}>
									{tech}
								</button>
							);
						})}
				</div>
			</div>

			<h1 className="mt-4 text-2xl">{project.name}</h1>
		</div>
	);
};

export default ProjectCard;