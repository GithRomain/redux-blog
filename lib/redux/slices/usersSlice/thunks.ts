import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./apiRequestUser";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetchAllUsers();
	return response;
});
