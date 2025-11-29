import type { Post } from "@/entities/posts/model";
import { Typography } from "@/shared/shadcn-ui/typography";

type PostListItemProps = {
  post: Post;
};

export function PostListItem({ post }: PostListItemProps) {
  return (
    <div className="flex p-3 flex-row items-center justify-between gap-3 bg-gray-400 rounded-2xl">
      <div>
        <Typography variant="h3">{post.id}</Typography>
      </div>
      <div className="flex flex-col gap-3">
        <Typography>{post.title}</Typography>
        <Typography className="break-words max-w-200">{post.body}</Typography>
      </div>
      <div>
        <Typography>{post.userId}</Typography>
      </div>
    </div>
  );
}
