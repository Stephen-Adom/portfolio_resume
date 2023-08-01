export type propType = {
	link: {
		url: string;
		icon: JSX.Element;
	};
};

const SocialBtn = ({ link }: propType) => {
	return (
		<a href={link.url} target="_blank" className="btn social-btn-icon">
			{link.icon}
		</a>
	);
};

export default SocialBtn;
