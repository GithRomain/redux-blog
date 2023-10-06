import type { ReduxState } from "@/lib/redux";

const selectAllPosts = (state: ReduxState) => state.users;
