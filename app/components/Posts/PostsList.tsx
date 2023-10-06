"use client";

/* Instruments */
import {
	fetchPosts,
	fetchUsers,
	postStateType,
	selectAllPosts,
	useDispatch,
	useSelector,
} from "@/lib/redux";
import Link from "next/link";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAlgo";
import { ReactionButtons } from "./ReactionButton";
import { useEffect } from "react";
import { Spinner } from "../extra/Spinner";
import { PostExcerpt } from "./PostExcerpt";

type Props = {};

export const PostsList = ({}: Props) => {
	const posts = useSelector(selectAllPosts);

	const dispatch = useDispatch();

	const postStatus = useSelector((state) => state.posts.status);
	const error = useSelector((state) => state.posts.error);

	useEffect(() => {
		if (postStatus === "idle") {
			dispatch(fetchPosts());
		}
	}, [postStatus, dispatch]);

	let content;

	if (postStatus === "loading") {
		content = <Spinner text="Loading..." />;
	} else if (postStatus === "succeeded") {
		// Sort posts in reverse chronological order by datetime string
		const orderedPosts = posts
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date));

		content = orderedPosts.map((post) => (
			<PostExcerpt
				key={post.id}
				post={post}
			/>
		));
	} else if (postStatus === "failed") {
		content = <div>{error}</div>;
	}

	return (
		<section className="posts-list">
			<h2>Posts</h2>
			{content}
		</section>
	);
};
