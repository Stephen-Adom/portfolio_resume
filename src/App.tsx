import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { MobileMenuBtn, SidebarComponent } from "./components";
import Home from "./pages/home.page";

type sidebarContextProp = {
	isSidebarVisible: boolean;
	toggleSidebar: () => void;
	isSettingsSidebarVisible: boolean;
	setIsSettingsSidebarVisible: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<sidebarContextProp | undefined>(undefined);

function App() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const [isSettingsSidebarVisible, setIsSettingsSidebarVisible] = useState(false);
	const [theme, setTheme] = useState("");

	const toggleSidebar = (e?: MouseEvent) => {
		e?.preventDefault();
		setIsSidebarVisible((prevState) => !prevState);
	};

	useEffect(() => {
		if (localStorage.getItem("app-theme")) {
			setTheme(localStorage.getItem("app-theme")!);
		} else {
			const sysTheme = window.matchMedia("(prefers-color-scheme: light)").matches
				? "light"
				: "dark";
			localStorage.setItem("app-theme", sysTheme);
			setTheme(sysTheme);
		}
	}, []);

	useEffect(() => {
		const root = document.querySelector(":root");
		root?.setAttribute(
			"color-scheme",
			`${localStorage.getItem("app-theme") ? localStorage.getItem("app-theme") : theme}`
		);
	}, [theme]);

	return (
		<section className="min-h-screen app">
			<SidebarContext.Provider
				value={{
					isSidebarVisible,
					toggleSidebar,
					isSettingsSidebarVisible,
					setIsSettingsSidebarVisible,
				}}
			>
				<SidebarComponent />
				<MobileMenuBtn />
				<Home />
			</SidebarContext.Provider>
		</section>
	);
}

export default App;
