import { useContext } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { SidebarContext } from "../App";

const MobileMenuBtn = () => {
	const { toggleSidebar } = useContext(SidebarContext)!;

	return (
		<button
			title="menu"
			type="button"
			onClick={toggleSidebar}
			className="fixed z-30 btn w-[60px] h-[60px] mobile-menu-btn rounded-full flex items-center justify-center top-16 right-3 sm:right-3 lg:right-16"
		>
			<BiMenuAltLeft className="text-2xl" />
		</button>
	);
};

export default MobileMenuBtn;
