import { postStateType } from "../..";

export const fetchAllPosts = async (): Promise<postStateType[]> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		// body: JSON.stringify({}),
	});
	const result = await response.json();

	return result;
};

export const AddPost = async (
	title: string,
	body: string,
	userId: string,
): Promise<postStateType> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: title,
			body: body,
			userId: userId,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const result: postStateType = await response.json();

	return result;
};
