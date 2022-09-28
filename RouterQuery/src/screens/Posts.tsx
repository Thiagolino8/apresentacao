import { useQuery } from '@tanstack/react-query'
import { Link, useLoaderData } from 'react-router-dom'

import { postsQuery } from '../queries/postsQuery'
import { PostType } from '../types'

export const Posts = () => {
	const initialData = useLoaderData() as PostType[]
	const { data } = useQuery({ ...postsQuery(), initialData })

	return (
		<div>
			<h1 className='pb-4 text-3xl font-bold'>Posts</h1>
			<div>
				<div>
					{data.map((post) => (
						<p key={post.id}>
							<Link to={`/${post.id}`}>{post.title}</Link>
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
