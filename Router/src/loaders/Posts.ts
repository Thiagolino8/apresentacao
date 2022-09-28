import axios from 'axios'
import { PostType } from '../types'

export const postsLoader = async (): Promise<PostType> => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
	return data
}
