import { Sidebar } from "primereact/sidebar";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../App";
import { BsMoonStars } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const SettingsSidebar = () => {
	const { isSettingsSidebarVisible, setIsSettingsSidebarVisible } = useContext(SidebarContext)!;
	const [colorTheme, setColorTheme] = useState<{ color1: string; color2: string }>();

	const colorPalletes = [
		{
			color1: "#cf0000",
			color2: "#f36060",
		},
		{
			color1: "#1e62d1",
			color2: "#3ab2ee",
		},
		{
			color1: "#ca8a04",
			color2: "#f6c55a",
		},
		{
			color1: "#15803d",
			color2: "#39b867",
		},
		{
			color1: "#6d28d9",
			color2: "#9256f3",
		},
		{
			color1: "#b5b5b5",
			color2: "#e4e4e4",
		},
		{
			color1: "#c2410c",
			color2: "#f57c4d",
		},
		{
			color1: "#be185d",
			color2: "#ee5b98",
		},
		{
			color1: "#7e22ce",
			color2: "#b06aee",
		},
	];

	const setCSSVariables = (color: { color1: string; color2: string }) => {
		document.documentElement.style.setProperty("--primaryColor", color.color1);
		document.documentElement.style.setProperty("--lightPrimaryColor", color.color2);
	};

	const setColor = (color: { color1: string; color2: string }) => {
		setCSSVariables(color);
		setColorTheme(color);
		localStorage.setItem("color", JSON.stringify(color));
	};

	const updateTheme = (theme: string) => {
		const root = document.querySelector(":root");
		root?.setAttribute("color-scheme", theme);
		localStorage.setItem("app-theme", theme);
	};

	useEffect(() => {
		if (localStorage.getItem("color")) {
			setColorTheme(JSON.parse(localStorage.getItem("color")!));
		} else {
			setColorTheme(colorPalletes[1]);
		}
	}, []);

	useEffect(() => {
		if (colorTheme) {
			setCSSVariables(colorTheme);
		}
	}, [colorTheme]);

	return (
		<Sidebar
			className="settingSidebar"
			visible={isSettingsSidebarVisible}
			onHide={() => setIsSettingsSidebarVisible(false)}
			position={"right"}
		>
			<div className="settings-container w-[80%] mx-auto mt-20">
				<h2 className="text-4xl font-light">Configuration</h2>

				<section className="mt-16 colors-section">
					<h6>COLORS</h6>

					<div className="flex flex-wrap items-center gap-8 mt-8 colors-container">
						{colorPalletes.map((color) => {
							return (
								<div
									onClick={() => setColor(color)}
									key={color["color1"]}
									style={{ backgroundColor: color["color1"] }}
									className={`color-pallete  w-8 h-8 rounded-full cursor-pointer relative after:content after:absolute after:top-[50%] after:left-[50%] after:w-1 after:h-1 after:bg-white after:rounded-full after:-translate-x-[50%] after:-translate-y-[50%] after:hidden ${
										colorTheme && colorTheme.color1 === color.color1 ? "active" : ""
									}`}
								></div>
							);
						})}
					</div>
				</section>

				<section className="mt-16 colors-section">
					<h6>THEME</h6>

					<div className="flex flex-wrap items-center gap-8 mt-8 theme-container">
						<button
							type="button"
							className="flex items-center gap-2 theme-btn"
							onClick={() => updateTheme("light")}
						>
							<BiSun className="text-2xl"></BiSun>
							Light Theme
						</button>
						<button
							type="button"
							className="flex items-center gap-2 theme-btn"
							onClick={() => updateTheme("dark")}
						>
							<BsMoonStars className="text-xl"></BsMoonStars>
							Dark Theme
						</button>
					</div>
				</section>
			</div>
		</Sidebar>
	);
};

export default SettingsSidebar;
