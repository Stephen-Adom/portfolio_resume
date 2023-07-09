import { AppSettingsBtn } from "../components";
import { LeftSidebar, RightToolbar, MainContent, SettingsSidebar } from "../features";

const Home = () => {
	return (
		<section
			id="home-section"
			className="relative flex flex-col items-start min-h-screen py-3 sm:flex-col md:flex-col lg:flex-row sm:py-3 md:py-3 lg:py-7"
		>
			<SettingsSidebar />
			<AppSettingsBtn />
			<LeftSidebar />
			<MainContent />
			<RightToolbar />
		</section>
	);
};

export default Home;
