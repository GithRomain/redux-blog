"use client";
/* Instruments */
import { selectPostById, useSelector, ReduxState } from "@/lib/redux";
import { EditPostForm } from "./EditPostForm";
import { PostAuthor } from "./PostAuthor";
import { ReactionButtons } from "./ReactionButton";

export type matchType = {
	params: string;
};

type Props = {
	match: matchType;
};

export const SignlePostPage = ({ match }: Props) => {
	const postId = match.params;

	const post = useSelector((state: ReduxState) =>
		selectPostById(state, postId),
	);

	if (!post) {
		return (
			<section>
				<h2>Post not found!</h2>
			</section>
		);
	}

	return (
		<>
			<section>
				<article className="post">
					<h2>{post.title}</h2>
					<p className="post-content">{post.body}</p>
				</article>
				<PostAuthor userId={post.userId} />
				<ReactionButtons post={post} />
			</section>
			<EditPostForm match={match} />
		</>
	);
};
