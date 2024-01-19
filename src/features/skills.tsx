import { SkillsCard, TitleLabel } from "../components";
import { AiFillHtml5 } from "react-icons/ai";
import { FaAngular, FaReact, FaCss3, FaBootstrap, FaJava } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss, SiRedux, SiReactivex } from "react-icons/si";
import { BiShapeTriangle, BiLogoSpringBoot } from "react-icons/bi";

const Skills = () => {
	return (
		<div
			className="my-16 lg:my-40 about-section"
			id="skills"
		>
			<TitleLabel>
				<BiShapeTriangle className="text-lg" /> MY SKILLS
			</TitleLabel>

			<h1
				data-aos="fade-up"
				data-aos-duration="2500"
				className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]"
			>
				My <span className="text-lightBlue">Advantages</span>
			</h1>
			<div className="grid w-full grid-cols-2 gap-5 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<SkillsCard
					label="Angular"
					icon={<FaAngular className="text-[5rem] text-red-700"></FaAngular>}
					color={`bg-red-700`}
				/>

				<SkillsCard
					label="React JS"
					icon={<FaReact className="text-[5rem] text-blue-700"></FaReact>}
					color={`bg-blue-700`}
				/>

				<SkillsCard
					label="Javascript"
					icon={<TbBrandJavascript className="text-[5rem] text-yellow-500"></TbBrandJavascript>}
					color="bg-yellow-500"
				/>

				<SkillsCard
					label="Typescript"
					icon={<TbBrandTypescript className="text-[5rem] text-cyan-700"></TbBrandTypescript>}
					color="bg-cyan-700"
				/>

				<SkillsCard
					label="HTML 5"
					icon={<AiFillHtml5 className="text-[5rem] text-orange-500"></AiFillHtml5>}
					color="bg-orange-500"
				/>

				<SkillsCard
					label="CSS 3"
					icon={<FaCss3 className="text-[5rem] text-blue-500"></FaCss3>}
					color="bg-blue-500"
				/>

				<SkillsCard
					label="Tailwind"
					icon={<SiTailwindcss className="text-[5rem] text-blue-400"></SiTailwindcss>}
					color="bg-blue-400"
				/>

				<SkillsCard
					label="Bootstrap"
					icon={<FaBootstrap className="text-[5rem] text-violet-800"></FaBootstrap>}
					color="bg-violet-800"
				/>

				<SkillsCard
					label="Redux"
					icon={<SiRedux className="text-[5rem] text-purple-700"></SiRedux>}
					color="bg-purple-700"
				/>

				<SkillsCard
					label="RxJS"
					icon={<SiReactivex className="text-[5rem] text-pink-700"></SiReactivex>}
					color="bg-pink-700"
				/>
				<SkillsCard
					label="Java"
					icon={<FaJava className="text-[5rem] text-orange-600"></FaJava>}
					color="bg-orange-600"
				/>
				<SkillsCard
					label="Spring Boot"
					icon={<BiLogoSpringBoot className="text-[5rem] text-green-600"></BiLogoSpringBoot>}
					color="bg-green-600"
				/>
			</div>
		</div>
	);
};

export default Skills;
