"use client";

import { matchType } from "@/app/components/Posts/SinglePostpage";
import {
	ReduxState,
	postStateType,
	postUpdated,
	selectPostById,
	useDispatch,
	useSelector,
} from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
	match: matchType;
};

export const EditPostForm = ({ match }: Props) => {
	const postId = match.params;

	const post: postStateType | undefined = useSelector((state: ReduxState) =>
		selectPostById(state, postId),
	);

	const [title, setTitle] = useState(post!.title);
	const [content, setContent] = useState(post!.body);

	const dispatch = useDispatch();
	const router = useRouter();

	const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);
	const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postUpdated({ id: postId, title, content }));
			router.push(`/pages/postsPage/${postId}`);
		}
	};
	return (
		<>
			<section>
				<h2>Edit Post</h2>
				<form>
					<label htmlFor="postTitle">Post Title:</label>
					<input
						type="text"
						id="postTitle"
						name="postTitle"
						placeholder="What's on your mind?"
						value={title}
						onChange={onTitleChanged}
					/>
					<label htmlFor="postContent">Content:</label>
					<textarea
						id="postContent"
						name="postContent"
						value={content}
						onChange={onContentChanged}
					/>
				</form>
				<button
					type="button"
					onClick={onSavePostClicked}
				>
					Save Post
				</button>
			</section>
		</>
	);
};
