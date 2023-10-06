import { postStateType } from "../..";
import { userStateType } from "./usersSlice";

export const fetchAllUsers = async (): Promise<userStateType[]> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		// body: JSON.stringify({}),
	});
	const result = await response.json();

	return result.map((user: userStateType) => ({
		id: user.id,
		name: user.name,
	}));
};
