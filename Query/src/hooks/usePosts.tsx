import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PostType } from '../types'

export const usePosts = () => {
	return useQuery<PostType[]>(['posts'], () =>
		axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => data)
	)
}
