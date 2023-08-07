export type propTypes = {
	children: (string | JSX.Element)[];
};

const TitleLabel = ({ children }: propTypes) => {
	return (
		<div className="flex items-center gap-3 px-5 py-2 text-xs rounded-full title-label w-max">
			{children}
		</div>
	);
};

export default TitleLabel;
