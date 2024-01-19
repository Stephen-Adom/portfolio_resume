type propType = {
	icon: JSX.Element;
	label: string;
	color: string;
};

const SkillsCard = ({ icon, label, color }: propType) => {
	const customClass: { [key: string]: string } = {
		"bg-red-700": "skill-box hover:bg-red-700",
		"bg-blue-700": "skill-box hover:bg-blue-700",
		"bg-yellow-500": "skill-box hover:bg-yellow-500",
		"bg-cyan-700": "skill-box hover:bg-cyan-700",
		"bg-orange-500": "skill-box hover:bg-orange-500",
		"bg-blue-500": "skill-box hover:bg-blue-500",
		"bg-blue-400": "skill-box hover:bg-blue-500",
		"bg-violet-800": "skill-box hover:bg-violet-800",
		"bg-purple-700": "skill-box hover:bg-purple-700",
		"bg-pink-700": "skill-box hover:bg-pink-700",
		"bg-orange-600": "skill-box hover:bg-orange-600",
		"bg-green-600": "skill-box hover:bg-green-600",
	};

	return (
		<div className={`${customClass[color]}`}>
			{icon}
			<span className="block">{label}</span>
		</div>
	);
};

export default SkillsCard;
