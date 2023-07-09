import { AiOutlineUser } from "react-icons/ai";
import { TitleLabel } from "../components";

const About = () => {
	return (
		<div
			className="my-16 lg:my-40 about-section"
			id="about"
			data-aos="fade-up"
			data-aos-duration="2000"
		>
			<TitleLabel>
				<AiOutlineUser className="text-lg" /> ABOUT
			</TitleLabel>

			<h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
				Every great design begin with an even <span className="text-lightBlue">better story</span>
			</h1>
			<p className="mt-6 w-full lg:w-[70%]" data-aos="fade-up" data-aos-duration="3000">
				Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work
				for agencies, consulted for startups, and collaborated with talented people to create
				digital products for both business and consumer use. I'm quietly confident, naturally
				curious, and perpetually working on improving my chopsone design problem at a time.
			</p>
		</div>
	);
};

export default About;
