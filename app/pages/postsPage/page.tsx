import { AddPostForm } from "@/app/components/Posts/AddPostForm";
import { PostsList } from "@/app/components/Posts/PostsList";
import { fetchUsers, useDispatch } from "@/lib/redux";

type Props = {};

function page({}: Props) {
	return (
		<>
			<PostsList />
			<AddPostForm />
		</>
	);
}

export default page;
