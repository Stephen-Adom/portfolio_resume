import About from "./about";
import Contact from "./contact";
import Introduction from "./introduction";
import Projects from "./projects";
import Resume from "./resume";
import Services from "./services";
import Skills from "./skills";
import ScrollSpy from "react-ui-scrollspy";

const MainContent = () => {
	return (
		<div className="pt-7 main-content ml-0 sm:ml-0 md:ml-0 lg:ml-[30%] w-ful lg:w-[60%] p-3 lg:p-0">
			<ScrollSpy>
				<Introduction />
				<About />
				<Resume />
				<Services />
				<Skills />
				<Projects />
				<Contact />
			</ScrollSpy>
		</div>
	);
};

export default MainContent;
