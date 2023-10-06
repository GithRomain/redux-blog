/* Components */
import { fetchUsers, useDispatch } from "@/lib/redux";
import { Counter } from "./components/Counter/Counter";

export default function IndexPage() {
	return <Counter />;
}

export const metadata = {
	title: "Redux Toolkit",
};
