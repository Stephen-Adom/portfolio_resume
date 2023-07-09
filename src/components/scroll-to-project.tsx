import { BsArrowBarDown } from "react-icons/bs";

const ScrollToProject = () => {
	return (
		<a
			href="#portfolio"
			className="scroll-to-project-btn w-[150px] h-[150px] rounded-full relative ml-auto mt-10 lg:mt-16 flex flex-col items-center justify-center hover:cursor-pointer"
		>
			<BsArrowBarDown className="text-4xl animate-bounce" />
			<span className="block text-sm">My Projects</span>
		</a>
	);
};

export default ScrollToProject;
