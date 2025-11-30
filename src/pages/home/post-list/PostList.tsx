import { postHooks } from "@/entities/posts/hooks";
import { Loader } from "@/shared/custom-ui/Loader";
import { Typography } from "@/shared/shadcn-ui/typography";
import { PostListItem } from "./post-list-item/PostListItem";

export function PostList() {
  const { data: posts, isLoading } = postHooks.usePostQuery();

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : posts && posts.length > 0 ? (
        <div className="flex gap-3 flex-col overflow-auto h-full p-3">
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
