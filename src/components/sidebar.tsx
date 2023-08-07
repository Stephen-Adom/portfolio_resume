import { Sidebar } from "primereact/sidebar";
import { useContext } from "react";
import { SidebarContext } from "../App";
import { AiFillGithub, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiLayoutMasonryLine, RiSuitcase2Line } from "react-icons/ri";
import { HiOutlineEnvelope, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { BiShapeTriangle } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const SidebarComponent = () => {
	const { isSidebarVisible, toggleSidebar } = useContext(SidebarContext)!;
	return (
		<Sidebar
			position="right"
			visible={isSidebarVisible}
			onHide={toggleSidebar}
			showCloseIcon={false}
		>
			<div className="sidebar-content w-[60%] mx-auto">
				<h2 className="text-xl">Menu</h2>

				<ul className="my-7 list-group">
					<li className="py-3 list-group-item" data-to-scrollspy-id="introduction">
						<a href="#introduction" className="flex items-center gap-2 text-sm">
							<AiOutlineHome className="text-lg" />
							<span>Home</span>
						</a>
					</li>

					<li className="py-3 list-group-item" data-to-scrollspy-id="about">
						<a href="#about" className="flex items-center gap-2 text-sm">
							<AiOutlineUser className="text-lg" />
							<span>About</span>
						</a>
					</li>

					<li className="py-3 list-group-item" data-to-scrollspy-id="resume">
						<a href="#resume" className="flex items-center gap-2 text-sm">
							<RiSuitcase2Line className="text-lg" />
							<span>Resume</span>
						</a>
					</li>

					<li className="py-3 list-group-item" data-to-scrollspy-id="services">
						<a href="#services" className="flex items-center gap-2 text-sm">
							<HiOutlineSquare3Stack3D className="text-lg" />
							<span>Services</span>
						</a>
					</li>

					<li className="py-3 list-group-item" data-to-scrollspy-id="skills">
						<a href="#skills" className="flex items-center gap-2 text-sm">
							<BiShapeTriangle className="text-lg" />
							<span>Skills</span>
						</a>
					</li>

					<li className="py-3 list-group-item" data-to-scrollspy-id="portfolio">
						<a href="#portfolio" className="flex items-center gap-2 text-sm">
							<RiLayoutMasonryLine className="text-lg" />
							<span>Portfolio</span>
						</a>
					</li>

					<li className="py-3 list-group-item" data-to-scrollspy-id="contact">
						<a href="#contact" className="flex items-center gap-2 text-sm">
							<HiOutlineEnvelope className="text-lg" />
							<span>Contact</span>
						</a>
					</li>
				</ul>

				<h2 className="text-xl">Social</h2>

				<div className="flex items-center gap-4 mt-5">
					<a title="linkedIn" href="https://www.linkedin.com/in/stephen-addae/" target="_blank">
						<FaLinkedinIn className="text-black text-md"></FaLinkedinIn>
					</a>
					<a title="github" href="https://github.com/Stephen-Adom" target="_blank">
						<AiFillGithub className="text-black text-md"></AiFillGithub>
					</a>
				</div>
			</div>
		</Sidebar>
	);
};

export default SidebarComponent;
