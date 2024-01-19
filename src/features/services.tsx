import { SpecializationCard, TitleLabel } from "../components";
import { FaAngular, FaReact } from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { SiRubyonrails } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";

const Services = () => {
	const specializations = [
		{
			title: "Angular Applications",
			icon: <FaAngular className="text-4xl text-red-700 animate-bounce"></FaAngular>,
			description: (
				<p className="text-sm">
					Angular is my forte! I have extensive experience in developing dynamic and robust web applications using the Angular framework. With a keen eye for detail, I excel in crafting seamless user interfaces and ensuring smooth data flow through reactive components. From handling complex state management with RxJS to building custom directives and services, I've got it all covered. Whether it's creating a single-page application or working on a large-scale enterprise project,{" "}
					<span className="italic text-red-700 font-semibold">Angular is where I truly shine!</span>
				</p>
			),
			numberOfProjects: 37,
			colorTheme: "text-red-700",
		},
		{
			title: "React Applications",
			icon: <FaReact className="text-4xl text-blue-700 animate-spin-slow"></FaReact>,
			description: (
				<p className="text-sm ">
					<span className="font-semibold text-blue-700 italic">React, oh how I love thee!</span> As a skilled React developer, I thrive on building interactive and efficient user interfaces that leave users impressed. From creating reusable components to harnessing the power of state management with Redux, I revel in the art of React development. Crafting high-performance React applications that seamlessly handle data updates and interactions is my passion. Whether it's working on front-end
					views or integrating with back-end APIs, I take pride in delivering top-notch React applications that elevate user experiences to the next level!
				</p>
			),
			numberOfProjects: 20,
			colorTheme: "text-blue-700",
		},
		{
			title: "Ruby on Rails Applications",
			icon: <SiRubyonrails className="text-6xl text-red-800 animate-pulse"></SiRubyonrails>,
			description: (
				<p className="text-sm">
					<span className="font-semibold text-red-800 italic">Ruby on Rails is another dimension of my expertise.</span> I have a deep understanding of developing web applications using the Ruby on Rails framework. My proficiency extends from crafting elegant backend architectures to seamlessly integrating frontend components. With Ruby on Rails, I'm able to create robust, scalable, and efficient applications that stand out for their functionality and performance. Whether it's optimizing
					database interactions or building RESTful APIs, Ruby on Rails is an integral part of my skill set that adds depth to my specialization.
				</p>
			),
			numberOfProjects: 7,
			colorTheme: "text-red-800",
		},

		{
			title: "Spring Boot Applications",
			icon: <BiLogoSpringBoot className="text-6xl text-green-600 animate-pulse"></BiLogoSpringBoot>,
			description: (
				<p className="text-sm">
					I'm on the journey of mastering <span className="font-semibold text-green-600 italic">Java with Spring Boot!</span> I've dedicated the past year to learning and applying my skills in developing web applications with the Spring Boot framework. While I may be in the early stages of my Java expertise, my commitment and enthusiasm drive me to create effective backend solutions. I'm keen on designing RESTful APIs and optimizing database interactions. Although I'm still in the learning
					phase, I'm excited about contributing to projects and leveraging Java (Spring Boot) to enhance my overall development capabilities!
				</p>
			),
			numberOfProjects: 1,
			colorTheme: "text-green-600",
		},
	];

	return (
		<div
			className="my-16 lg:my-40 services-section"
			id="services"
			data-aos="fade-up"
			data-aos-duration="2500"
		>
			<TitleLabel>
				<HiOutlineSquare3Stack3D className="text-lg" /> SERVICES
			</TitleLabel>

			<h1
				className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]"
				data-aos="fade-up"
				data-aos-duration="3000"
			>
				My <span className="text-lightBlue">Specializations</span>
			</h1>
			<div className="w-full mt-6">
				{specializations.map((specialization) => {
					return (
						<SpecializationCard
							key={specialization.title}
							specialization={specialization}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
