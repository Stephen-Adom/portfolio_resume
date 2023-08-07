import { AiOutlineUser } from "react-icons/ai";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { BiChevronsDown } from "react-icons/bi";
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
				Hey there! My name is Stephen Adom Addae. So, for the past 4 years, I've been on this cool
				journey as a full-stack software engineer. During this time, I had the chance to do remote
				work for Interface Financial Technology as their lead Front-end Developer, and let me tell
				you, it was a blast! I got to update their web apps and boy, did it make a difference! We
				improved stability, security, and speed by a whopping 75%!. Recently, I had another exciting
				opportunity - I completed a Remote Full Stack Web Development Program. I spent over 1300
				hours mastering algorithms, data structures, and full-stack development. While doing that, I
				was simultaneously working on some awesome projects with Ruby, Rails, JavaScript, React, and
				Redux. It was intense, but totally worth it!
			</p>

			<Inplace>
				<InplaceDisplay>
					<p
						className="w-full lg:w-[70%] cursor-pointer my-name italic font-bold flex items-center"
						data-aos="fade-up"
						data-aos-duration="3000"
					>
						<BiChevronsDown className="text-lg animate-bounce" />I want to know more...
					</p>
				</InplaceDisplay>
				<InplaceContent>
					<p className="mt-6 w-full lg:w-[70%]" data-aos="fade-up" data-aos-duration="3000">
						During the program, I also developed skills in remote pair programming using GitHub,
						industry-standard git-flow, and daily standups to communicate and collaborate with
						international remote developers. Talk about working with developers from all around the
						world right from the comfort of my own space!
					</p>

					<p className="mt-6 w-full lg:w-[70%]" data-aos="fade-up" data-aos-duration="3000">
						Gotta say, it was a game-changer! I'm always eager to learn and grow, and this program
						just fueled my passion even more. Making things better and cooler is just what I love
						doing!
					</p>
				</InplaceContent>
			</Inplace>
		</div>
	);
};

export default About;
