type SpecializationType = {
	title: string;
	icon: JSX.Element;
	description: JSX.Element;
	numberOfProjects: number;
	colorTheme: string;
};

type propType = {
	specialization: SpecializationType;
};

const SpecializationCard = ({ specialization }: propType) => {
	return (
		<div className="mb-5 rounded-3xl card specialization-card hover:cursor-pointer">
			<div className="p-8 md:p-10 lg:p-10 card-body">
				<div className="flex items-start justify-between mb-1">
					<h3 className="text-xl font-light lg:text-2xl">{specialization.title}</h3>

					{specialization.icon}
				</div>
				{specialization.description}

				<span className={`block mt-5 text-xs font-bold ${specialization.colorTheme}`}>
					{specialization.numberOfProjects} PROJECTS
				</span>
			</div>
		</div>
	);
};

export default SpecializationCard;
