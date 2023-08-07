import { Tooltip as ReactTooltip } from "react-tooltip";

const Tooltips = () => {
	return (
		<>
			<ReactTooltip anchorId="introduction-icon" place="left" content="Introduction" />
			<ReactTooltip anchorId="about-icon" place="left" content="About" />
			<ReactTooltip anchorId="resume-icon" place="left" content="Resume" />
			<ReactTooltip anchorId="services-icon" place="left" content="Services" />
			<ReactTooltip anchorId="skills-icon" place="left" content="Skills" />
			<ReactTooltip anchorId="portfolio-icon" place="left" content="Potfolio" />
			<ReactTooltip anchorId="contact-icon" place="left" content="Contact" />
		</>
	);
};

export default Tooltips;
