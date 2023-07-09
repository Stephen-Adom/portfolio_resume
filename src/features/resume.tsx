import { RiSuitcase2Line } from "react-icons/ri";
import { TitleLabel } from "../components";
import { Timeline } from "primereact/timeline";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";

type experienceType = {
	startdate: string;
	enddate: string;
	location: string;
	company: string;
	role: string;
};

type educationType = {
	startdate: string;
	enddate: string;
	certification: string;
	school: string;
};

const Resume = () => {
	const experiences = [
		{
			startdate: "July 2019",
			enddate: "Present",
			location: "Adjei Mensah, Greater Accra Region, Ghana",
			company: "Interface Financial Technologies Limited",
			role: "Senior Frontend Developer",
		},
		{
			startdate: "September 2019",
			enddate: "April 2020",
			location: "Legon, Greater Accra Region, Ghana",
			company: "University of Ghana Computing Systems · Internship",
			role: "Web Application Developer",
		},
		{
			startdate: "June 2015",
			enddate: "March 2019",
			location: "Sekondi-Takoradi, Western Region, Ghana",
			company: "Siebi Microfinance",
			role: "I.T Officer",
		},
	];

	const educations = [
		{
			startdate: "April 2015",
			enddate: "July 2019",
			certification: "Full Stack Web Developer, Full Stack Web Development Program",
			school: "Microverse",
		},
		{
			startdate: "April 2015",
			enddate: "July 2019",
			certification: "Bachelor's Degree, Information Technology",
			school: "University of Ghana",
		},
	];

	const renderExperience = (experience: experienceType) => {
		return (
			<div className="pb-10 pl-4 card hover:cursor-pointer">
				<span className="block text-sm text-gray-500 time-period">
					{experience.startdate} - {experience.enddate}
				</span>

				<h1 className="mt-4 text-[1.6rem]">{experience.role}</h1>
				<span className="flex items-center gap-2 mt-3 text-sm text-gray-500">
					<BsFillBuildingsFill /> {experience.company}
				</span>
				<span className="flex items-center gap-1 mt-2 text-gray-500">
					<FaMapMarkerAlt /> {experience.location}
				</span>
			</div>
		);
	};

	const renderEducation = (education: educationType) => {
		return (
			<div className="pb-10 pl-4 card hover:cursor-pointer">
				<span className="block text-sm text-gray-500 time-period">
					{education.startdate} - {education.enddate}
				</span>

				<h1 className="mt-4 text-[1.6rem]">{education.certification}</h1>
				<span className="flex items-center gap-2 mt-3 text-sm text-gray-500">
					<BsFillBuildingsFill /> {education.school}
				</span>
			</div>
		);
	};
	return (
		<div
			className="my-16 lg:my-40 about-section"
			id="resume"
			data-aos="fade-up"
			data-aos-duration="2000"
		>
			<TitleLabel>
				<RiSuitcase2Line className="text-lg" /> RESUME
			</TitleLabel>

			<section data-aos="fade-up" data-aos-duration="2500">
				<h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
					My <span className="text-lightBlue">Experience</span>
				</h1>
				<div className="mt-6 w-full lg:w-[70%]" data-aos="fade-left" data-aos-duration="3000">
					<Timeline value={experiences} content={(experience) => renderExperience(experience)} />
				</div>
			</section>

			<section data-aos="fade-up" data-aos-duration="2500">
				<h1 className="mt-6 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
					My <span className="text-lightBlue">Education</span>
				</h1>
				<div className="mt-6 w-full lg:w-[70%]" data-aos="fade-left" data-aos-duration="3000">
					<Timeline value={educations} content={(education) => renderEducation(education)} />
				</div>
			</section>
		</div>
	);
};

export default Resume;
