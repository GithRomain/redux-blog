"use client";

import {
	SignlePostPage,
	matchType,
} from "@/app/components/Posts/SinglePostpage";
import { useParams } from "next/navigation";

type Props = {};

function page({}: Props) {
	const params = useParams();

	const match: matchType = {
		params: params.postId[0],
	};
	return (
		<>
			<SignlePostPage match={match} />
		</>
	);
}

export default page;
