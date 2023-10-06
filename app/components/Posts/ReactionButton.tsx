import { postStateType, reactionAdded, useDispatch } from "@/lib/redux";
import React from "react";

const reactionEmoji = {
	thumbsUp: "👍",
	hooray: "🎉",
	heart: "❤️",
	rocket: "🚀",
	eyes: "👀",
};

type Props = {
	post: postStateType;
};

export const ReactionButtons = ({ post }: Props) => {
	const dispatch = useDispatch();

	const reactionButtons = Object.entries(reactionEmoji).map(
		([name, emoji]) => {
			return (
				<button
					key={name}
					type="button"
					className="muted-button reaction-button"
					onClick={() =>
						dispatch(
							reactionAdded({ postId: post.id, reaction: name }),
						)
					}
				>
					{emoji} {post.reactions[name]}
				</button>
			);
		},
	);

	return <div>{reactionButtons}</div>;
};
