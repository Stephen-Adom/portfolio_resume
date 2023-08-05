import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BsArrowRightCircle, BsGlobeAmericas } from "react-icons/bs";
import { ProjectType } from "../model/project";

type propType = {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
	project: ProjectType;
};

const ProjectDetails = ({ visible, setVisible, project }: propType) => {
	return (
		<Dialog
			header={project.name}
			showHeader={false}
			visible={visible}
			maximized={true}
			style={{ width: "100vw" }}
			onHide={() => setVisible(false)}
		>
			<div className="project-details-container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[60%_40%] gap-3 mt-10">
				<section className="project-image-container">
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={10}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{project.screenshots.map((screenshot, index) => {
							return (
								<SwiperSlide key={index}>
									<div
										className="screenshot-container bg-contain bg-center h-[450px] w-full bg-no-repeat"
										style={{ backgroundImage: `url(${screenshot})` }}
									></div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</section>
				<section className="project-information px-4">
					<h2 className="font-extrabold text-3xl">{project.name}</h2>
					<p className="mt-3 text-justify">{project.description}</p>

					<div className="mt-4 flex items-center gap-2 tech bottom-4 left-4">
						{project.tech_stacks.map((stack) => {
							return (
								<button type="button" className="btn btn-tech" key={stack}>
									{stack}
								</button>
							);
						})}
					</div>

					<div className="flex items-center gap-4 mt-10">
						<button
							type="button"
							className="px-5 py-3 text-xs font-bold text-white rounded-full linear-gradient flex items-center gap-x-2"
						>
							VIEW PROJECT
							<BsArrowRightCircle className="text-lg" />
						</button>

						<button
							type="button"
							className="px-5 py-3 text-xs font-bold text-white rounded-full linear-gradient flex items-center gap-x-2"
						>
							LIVE DEMO
							<BsGlobeAmericas className="text-lg" />
						</button>
					</div>
				</section>
			</div>
		</Dialog>
	);
};

export default ProjectDetails;
