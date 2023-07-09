import { AnalyticLabel, ScrollToProject, TitleLabel } from "../components";
import { AiOutlineHome } from "react-icons/ai";

const Introduction = () => {
	const projectExperience = [
		{
			level: "3+",
			label: "YEARS OF EXPERIENCE",
		},
		{
			level: "182",
			label: "CURRENT PROJECTS COMPLETED",
		},
	];

	return (
		<div className="pt-10 introduction" id="introduction">
			<TitleLabel>
				<AiOutlineHome className="text-lg" /> INTRODUCTION
			</TitleLabel>

			<h1 className="text-[60px] lg:text-[78px] font-light mt-14 leading-tight">
				Hi, I'm <span className="my-name">Stephen</span>, <br /> UI Designer and Front-end Developer
			</h1>

			<p className="mt-10 text-gray-500 w-full lg:w-[60%]">
				I design and code beautifully simple things and i love what i do. Just simple like that!
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
