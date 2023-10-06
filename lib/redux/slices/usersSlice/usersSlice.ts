import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks";

const initialState: userStateType[] = [
	{ id: "0", name: "Tianna Jenkins" },
	{ id: "1", name: "Kevin Grant" },
	{ id: "2", name: "Madison Price" },
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (_, action) => {
			return action.payload;
		});
	},
});

export interface userStateType {
	id: string;
	name: string;
}
