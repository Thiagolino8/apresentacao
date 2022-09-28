import axios from 'axios'
import { PostType } from '../types'

interface PostsQuery {
  queryKey: ['posts'],
  queryFn: () => Promise<PostType[]>,
  staleTime: number
}

export const postsQuery = (): PostsQuery => ({
	queryKey: ['posts'],
	queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => data),
	staleTime: 1000 * 60 * 2,
})
