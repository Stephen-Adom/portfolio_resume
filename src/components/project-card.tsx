import { useState } from "react";
import { ProjectType } from "../model/project";
import { ProjectDetails } from "../features";

type propType = {
	project: ProjectType;
	index: number;
};

const ProjectCard = ({ project, index }: propType) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<>
			<div
				className={`${(index === 0 || index === 5) && "col-span-1 lg:col-span-2"}`}
				onClick={() => setVisible(true)}
			>
				<div
					style={{ backgroundImage: `url(${project.image})` }}
					className={`project-card cursor-pointer relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gray-900/10`}
				>
					<div className="absolute flex items-center flex-wrap gap-2 tech bottom-4 left-4 z-10">
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
			<ProjectDetails visible={visible} setVisible={setVisible} project={project} />
		</>
	);
};

export default ProjectCard;
