"use client";

/* Instruments */
import { useSelector } from "@/lib/redux";

type Props = {
	userId: string;
};

export const PostAuthor = ({ userId }: Props) => {
	const author = useSelector((state) =>
		// state.users.find((user) => user.id === userId),
		state.users.find((user) => user.id === userId),
	);

	return <span>by {author ? author.name : "Unknown author"}</span>;
};
