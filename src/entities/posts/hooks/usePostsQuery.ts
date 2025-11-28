import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { POST_KEYS, type Post } from "../model";
import { postService } from "../api/service";

export function usePostQuery<TData = Post[]>(
  options?: Partial<UseQueryOptions<Post[], AxiosError, TData>>
): UseQueryResult<TData> {
  return useQuery<Post[], AxiosError, TData>({
    queryKey: [POST_KEYS.POSTS],
    queryFn: () => postService.getPosts(),
    ...options,
  });
}
