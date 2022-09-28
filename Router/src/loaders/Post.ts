import axios from 'axios'
import type { Params } from 'react-router-dom'
import { PostType } from '../types'

export const postLoader = async ({ params: { postId } }: { params: Params<string> }): Promise<PostType> => {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	return data
}
