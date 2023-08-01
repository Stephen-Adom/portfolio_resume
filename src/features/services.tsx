import { TitleLabel } from "../components";
import { FaAngular, FaReact } from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

const Services = () => {
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
				<div className="mb-5 rounded-3xl card specialization-card hover:cursor-pointer">
					<div className="p-8 md:p-10 lg:p-10 card-body">
						<div className="flex items-start justify-between mb-1">
							<h3 className="text-xl font-light lg:text-2xl">Angular Applications</h3>

							<FaAngular className="text-4xl text-red-700 animate-bounce"></FaAngular>
						</div>
						<p className="text-sm text-gray-500">
							Angular is my forte! I have extensive experience in developing dynamic and robust web
							applications using the Angular framework. With a keen eye for detail, I excel in
							crafting seamless user interfaces and ensuring smooth data flow through reactive
							components. From handling complex state management with RxJS to building custom
							directives and services, I've got it all covered. Whether it's creating a single-page
							application or working on a large-scale enterprise project,{" "}
							<span className="italic text-red-700 font-semibold">
								Angular is where I truly shine!
							</span>
						</p>

						<span className="block mt-5 text-xs font-bold text-red-700">37 PROJECTS</span>
					</div>
				</div>

				<div className="rounded-3xl card specialization-card hover:cursor-pointer">
					<div className="p-8 md:p-10 lg:p-10 card-body">
						<div className="flex items-start justify-between mb-1">
							<h3 className="text-xl font-light lg:text-2xl">React Applications</h3>

							<FaReact className="text-4xl text-blue-700 animate-spin-slow"></FaReact>
						</div>
						<p className="text-sm text-gray-500">
							<span className="font-semibold text-blue-700 italic">React, oh how I love thee!</span>{" "}
							As a skilled React developer, I thrive on building interactive and efficient user
							interfaces that leave users impressed. From creating reusable components to harnessing
							the power of state management with Redux, I revel in the art of React development.
							Crafting high-performance React applications that seamlessly handle data updates and
							interactions is my passion. Whether it's working on front-end views or integrating
							with back-end APIs, I take pride in delivering top-notch React applications that
							elevate user experiences to the next level!
						</p>

						<span className="block mt-5 text-xs font-bold text-blue-700">20 PROJECTS</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
