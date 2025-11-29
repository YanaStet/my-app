import { postHooks } from "@/entities/posts/hooks";
import { Loader } from "@/shared/custom-ui/Loader";
import { Typography } from "@/shared/shadcn-ui/typography";
import { PostListItem } from "./post-list-item/PostListItem";

export function PostList() {
  const { data: posts, isLoading } = postHooks.usePostQuery();

  return (
    <div className="h-dvh w-full flex items-center justify-center p-3">
      {isLoading ? (
        <Loader />
      ) : posts && posts.length > 0 ? (
        <div className="flex gap-3 flex-col">
          {posts.map((post, i) => (
            <PostListItem post={post} key={i} />
          ))}
        </div>
      ) : (
        <Typography variant="h2">There is no posts yet.</Typography>
      )}
    </div>
  );
}
