import { createAsyncThunk } from "@reduxjs/toolkit";
import { postStateType, postsSlice } from "./postsSlice";
import { AddPost, fetchAllPosts } from "./apiRequestsPost";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await fetchAllPosts();
	return response;
});

export const addPost = createAsyncThunk(
	"posts/addPost",
	async ({
		title,
		body,
		userId,
	}: {
		title: string;
		body: string;
		userId: string;
	}) => {
		const response = await AddPost(title, body, userId);
		return response;
	},
);
