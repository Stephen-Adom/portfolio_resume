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

							<FaAngular className="text-4xl text-red-700"></FaAngular>
						</div>
						<p className="text-sm text-gray-500">
							I design and develop applications using Angular framework
						</p>

						<a href="" className="block mt-5 text-xs font-bold text-red-700">
							80 PROJECTS
						</a>
					</div>
				</div>

				<div className="rounded-3xl card specialization-card hover:cursor-pointer">
					<div className="p-8 md:p-10 lg:p-10 card-body">
						<div className="flex items-start justify-between mb-1">
							<h3 className="text-xl font-light lg:text-2xl">React Applications</h3>

							<FaReact className="text-4xl text-blue-700"></FaReact>
						</div>
						<p className="text-sm text-gray-500">
							I design and create javascript-based applications for web or mobile evironments using
							react library
						</p>

						<a href="" className="block mt-5 text-xs font-bold text-blue-700">
							20 PROJECTS
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
