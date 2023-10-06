/* Instruments */
import type { postStateType } from "@/lib/redux";
import type { ReduxState } from "@/lib/redux";

export const selectAllPosts = (state: ReduxState) => state.posts.posts;

export const selectPostById = (state: ReduxState, postId: string) =>
	state.posts.posts.find((post) => post.id == postId);
