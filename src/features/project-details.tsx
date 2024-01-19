import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BsArrowRightCircle, BsGlobeAmericas } from "react-icons/bs";
import { ProjectType } from "../model/project";
import { RiCloseFill } from "react-icons/ri";

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
			onHide={() => setVisible(false)}
		>
			<div className="project-details-container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[60%_40%] gap-3 mt-10 relative top-0 sm:top-0 md:top-[50%] translate-y-0 sm:translate-y-0  md:-translate-y-[50%]">
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
										className="screenshot-container bg-contain bg-center h-[300px] md:h-[450px] w-full bg-no-repeat"
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

					<div className="mt-4 flex items-center gap-2 flex-wrap tech bottom-4 left-4">
						{project.tech_stacks.map((stack) => {
							return (
								<button
									type="button"
									className="btn btn-tech"
									key={stack}
								>
									{stack}
								</button>
							);
						})}
					</div>

					<div className="flex items-center gap-3 md:gap-4 mt-10">
						<a
							href={project.gitHub_link}
							target="_blank"
							className="px-3 md:px-5 w-full md:w-max py-3 text-xs font-bold text-white rounded-full linear-gradient flex items-center justify-center gap-x-1 md:gap-x-2"
						>
							VIEW PROJECT
							<BsArrowRightCircle className="text-lg" />
						</a>

						{project.live_demo && (
							<a
								href={project.live_demo}
								target="_blank"
								className="px-3 md:px-5 w-full md:w-max py-3 text-xs font-bold text-white rounded-full linear-gradient flex items-center justify-center gap-x-1 md:gap-x-2"
							>
								LIVE DEMO
								<BsGlobeAmericas className="text-lg" />
							</a>
						)}
					</div>
				</section>
			</div>

			<button
				title="close"
				onClick={() => setVisible(false)}
				type="button"
				className="fixed z-30 btn w-[60px] h-[60px] mobile-menu-btn rounded-full flex items-center justify-center top-5 right-3 sm:right-3 lg:right-16"
			>
				<RiCloseFill className="text-2xl" />
			</button>
		</Dialog>
	);
};

export default ProjectDetails;
