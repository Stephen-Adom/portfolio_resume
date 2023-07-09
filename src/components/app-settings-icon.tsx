import { useContext } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { SidebarContext } from "../App";

const AppSettingsBtn = () => {
	const { setIsSettingsSidebarVisible } = useContext(SidebarContext)!;

	const toggleSettingsSidebar = () => {
		setIsSettingsSidebarVisible((prevState: boolean) => !prevState);
	};
	return (
		<div
			className="app-settings-btn fixed left-0 top-[10%] w-[40px] h-[40px] z-20 flex items-center justify-center cursor-pointer"
			onClick={toggleSettingsSidebar}
		>
			<HiOutlineCog6Tooth className="text-xl animate-spin"></HiOutlineCog6Tooth>
		</div>
	);
};

export default AppSettingsBtn;
