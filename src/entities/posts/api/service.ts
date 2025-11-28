import Api from "@/shared/api/api";
import type { Post } from "../model";

class PostService {
  async getPosts(): Promise<Post[]> {
    const data = await Api.get<Post[]>("/posts");
    return data;
  }
}

export const postService = new PostService();
