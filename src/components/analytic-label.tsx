type propType = {
	experience: { level: string; label: string };
};

const AnalyticLabel = ({ experience }: propType) => {
	return (
		<div className="analytic-label">
			<h1 className="text-6xl font-light">{experience.level}</h1>
			<p className="w-full lg:w-[70%] mt-5">{experience.label}</p>
		</div>
	);
};

export default AnalyticLabel;
