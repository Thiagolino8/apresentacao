import axios from 'axios'
import { PostType } from '../types'

interface PostsQuery {
	queryKey: ['post', PostType['id']]
	queryFn: () => Promise<PostType>
	enabled: boolean
	staleTime: number
}

export const postQuery = (postId: PostType['id']): PostsQuery => ({
	queryKey: ['post', postId],
	queryFn: () => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(({ data }) => data),
	enabled: !!postId,
	staleTime: 1000 * 60 * 2,
})
