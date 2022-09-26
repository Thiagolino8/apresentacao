import { useQuery } from "@tanstack/react-query"
import { PostType } from "../types"
import { getPostById } from "../utils/getPostsById"

export const usePost = (postId: PostType["id"]) => {
	return useQuery<PostType>(['post', postId], () => getPostById(postId), {
		enabled: !!postId,
	})
}