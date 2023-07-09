import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineEnvelope, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { RiLayoutMasonryLine, RiSuitcase2Line } from "react-icons/ri";
import { Tooltips } from "../components";
import { BiShapeTriangle } from "react-icons/bi";

const RightToolbar = () => {
	return (
		<div className="hidden right-toolbar sm:hidden md:hidden lg:block">
			<Tooltips />
			<ul>
				<li
					id="introduction-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="introduction"
				>
					<a href="#introduction">
						<AiOutlineHome className="text-lg" />
					</a>
				</li>
				<li
					id="about-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="about"
				>
					<a href="#about">
						<AiOutlineUser className="text-lg" />
					</a>
				</li>
				<li
					id="resume-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="resume"
				>
					<a href="#resume">
						<RiSuitcase2Line className="text-lg" />
					</a>
				</li>
				<li
					id="services-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="services"
				>
					<a href="#services">
						<HiOutlineSquare3Stack3D className="text-lg" />
					</a>
				</li>
				<li
					id="skills-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="skills"
				>
					<a href="#skills">
						<BiShapeTriangle className="text-lg" />
					</a>
				</li>
				<li
					id="portfolio-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="portfolio"
				>
					<a href="#portfolio">
						<RiLayoutMasonryLine className="text-lg" />
					</a>
				</li>
				<li
					id="contact-icon"
					className="flex items-center justify-center py-3"
					data-to-scrollspy-id="contact"
				>
					<a href="#contact">
						<HiOutlineEnvelope className="text-lg" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default RightToolbar;
