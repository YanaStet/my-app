import { postHooks } from "@/entities/posts/hooks";
import { Button } from "@/shared/shadcn-ui/button";

export function HomePage() {
  const { data } = postHooks.usePostQuery();
  console.log(data);
  return (
    <div className="p-5">
      <Button />
    </div>
  );
}
