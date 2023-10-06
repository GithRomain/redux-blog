import { postStateType } from "@/lib/redux";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAlgo";
import { ReactionButtons } from "./ReactionButton";
import Link from "next/link";

type Props = {
	post: postStateType;
};

export const PostExcerpt = ({ post }: Props) => {
	return (
		<article
			className="border-4 border-light-blue-500 border-opacity-100"
			key={post.id}
		>
			<h3>{post.title}</h3>
			<p className="post-content">{post.body.substring(0, 100)}</p>
			<PostAuthor userId={post.userId} />
			<TimeAgo timestamp={post.date} />
			<ReactionButtons post={post} />
			<Link href={`/pages/postsPage/${post.id}`}>View Post</Link>
		</article>
	);
};
