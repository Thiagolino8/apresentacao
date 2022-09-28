import axios from 'axios'
import { PostType } from '../types'

interface PostsQuery {
  queryKey: ['posts'],
  queryFn: () => Promise<PostType[]>,
}

export const postsQuery = (): PostsQuery => ({
	queryKey: ['posts'],
	queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => data),
})
