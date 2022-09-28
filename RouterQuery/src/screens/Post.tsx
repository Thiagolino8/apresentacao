import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Link, useLoaderData, useParams } from 'react-router-dom'

import { postQuery } from '../queries/postQuery'
import { PostType } from '../types'

export const Post = () => {
	const initialData = useLoaderData() as PostType
	const queryClient = useQueryClient()
	const { postId } = useParams()
	const { data } = useQuery({ ...postQuery(Number(postId)), initialData })

	return (
		<div>
			<h1>{data.title}</h1>
			<div>
				<p>{data.body}</p>
			</div>
			<div className='flex gap-5'>
				<Link className='btn-primary btn' to='/'>
					Back
				</Link>
				<button onClick={() => queryClient.invalidateQueries(['post', Number(postId)])} className='btn btn-primary'>
					Invalidate
				</button>
			</div>
		</div>
	)
}
