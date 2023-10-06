import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
	nanoid,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { addPost, fetchPosts } from "./thunks";

enum Status {
	idle = "idle",
	loading = "loading",
	succeeded = "succeeded",
	failed = "failed",
}

const initialState: stateType = {
	posts: [],
	status: Status.idle,
	error: null,
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action: PayloadAction<postStateType>) {
				state.posts.push(action.payload);
			},
			prepare(title: string, content: string, userId: string) {
				return {
					payload: {
						id: nanoid(),
						date: new Date().toISOString(),
						title,
						body: content,
						userId,
						reactions: {
							thumbsUp: 0,
							hooray: 0,
							heart: 0,
							rocket: 0,
							eyes: 0,
						},
					},
				};
			},
		},

		postUpdated(state, action) {
			const { id, title, content } = action.payload;
			const existingPost = state.posts.find((post) => post.id === id);
			if (existingPost) {
				existingPost.title = title;
				existingPost.body = content;
			}
		},

		reactionAdded(
			state,
			action: PayloadAction<{ postId: string; reaction: string }>,
		) {
			const { postId, reaction } = action.payload;
			const existingPost = state.posts.find((post) => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = Status.loading;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = Status.succeeded;
				// Add any fetched posts to the array
				const jsonAnnexe = {
					date: new Date().toISOString(),
					reactions: {
						thumbsUp: 0,
						hooray: 0,
						heart: 0,
						rocket: 0,
						eyes: 0,
					},
				};

				for (let i = 0; i < action.payload.length; i++) {
					// Fusionner les propriétés du JSON annexe avec le JSON courant
					action.payload[i] = { ...action.payload[i], ...jsonAnnexe };
				}

				state.posts = state.posts.concat(action.payload);
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = Status.failed;
				state.error = action.error.message;
			})
			.addCase(addPost.fulfilled, (state, action) => {
				const jsonAnnexe = {
					date: new Date().toISOString(),
					reactions: {
						thumbsUp: 0,
						hooray: 0,
						heart: 0,
						rocket: 0,
						eyes: 0,
					},
				};

				action.payload = { ...action.payload, ...jsonAnnexe };
				// We can directly add the new post object to our posts array
				state.posts.push(action.payload);
			});
	},
});

export interface postStateType {
	id: string;
	date: string;
	title: string;
	body: string;
	userId: string;
	reactions: {
		[key: string]: number;
		thumbsUp: number;
		hooray: number;
		heart: number;
		rocket: number;
		eyes: number;
	};
}

export interface stateType {
	posts: postStateType[];
	status: Status;
	error: string | null | undefined;
}

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
