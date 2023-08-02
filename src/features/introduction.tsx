import { AnalyticLabel, ScrollToProject, TitleLabel } from "../components";
import { AiOutlineHome } from "react-icons/ai";

const Introduction = () => {
	const projectExperience = [
		{
			level: "4",
			label: "YEARS OF EXPERIENCE",
		},
		{
			level: "60+",
			label: "NUMBER OF CONTRIBUTED PROJECTS",
		},
	];

	return (
		<div className="pt-10 introduction" id="introduction">
			<TitleLabel>
				<AiOutlineHome className="text-lg" /> INTRODUCTION
			</TitleLabel>

			<h1 className="text-[60px] lg:text-[78px] font-light mt-14 leading-tight">
				Hi, I'm <span className="my-name">Stephen</span>, <br /> UI Designer and Full-stack
				Developer
			</h1>

			<p className="mt-10 w-full lg:w-[60%]">
				I design and code beautifully simple things and I love what I do. Just simple like that!
			</p>

			<ScrollToProject />

			<div className="flex items-center gap-4 mt-5 analytic-labels">
				{projectExperience.map((experience) => {
					return <AnalyticLabel key={experience.label} experience={experience} />;
				})}
			</div>
		</div>
	);
};

export default Introduction;
