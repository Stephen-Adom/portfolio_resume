export type propType = {
	children: JSX.Element;
};

const SocialBtn = ({ children }: propType) => {
	return (
		<a href="#" className="btn social-btn-icon">
			{children}
		</a>
	);
};

export default SocialBtn;
