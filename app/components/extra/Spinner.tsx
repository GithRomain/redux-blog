interface Props {
	text: string;
}

export const Spinner = ({ text = "" }: Props) => {
	const header = text ? <h4>{text}</h4> : null;
	return (
		<div className="spinner">
			{header}
			<div className="loader" />
		</div>
	);
};
